const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Master = require('../../models/Master');
const CVmaster2 = require('../../models/CVmaster2');
const CVmaster3 = require('../../models/CVmaster3');
const { check, validationResult } = require('express-validator');


router.get('/', async (req, res) => {

    try{

        const profiles = await Master.find();
        res.json(profiles);

    }catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});

router.post('/create', [auth, [
    check('dob', 'date of birth is required').not().isEmpty(),
    ]
],

async (req, res) => {

    console.log("Got in Server " + req.body.profile._aid);
    
    const {
        _aid, _n, dob, e, m, _sr, _p, _sp, _ac
    } = req.body.profile;

    const flag = req.body.vflag;
    const vremarks = req.body.vremarks;
    const uremarks = req.body.uremarks;

    // build profile object

    const profileFields = {};
    profileFields._aid = _aid;
    profileFields._n = _n;
    profileFields.dob = dob;
    profileFields.e = e;
    profileFields.m = m;
    profileFields.status = flag;
    profileFields._sr = _sr;
    profileFields.vremarks = vremarks;
    profileFields.uremarks = uremarks;
    profileFields._p = _p;
    profileFields._ac = _ac;
    profileFields._sp = _sp;

    console.log(profileFields);

    try {

        let cvpersonal = await CVmaster2.findOne({ _aid: req.body.profile._aid});

        console.log(cvpersonal);
        if(cvpersonal) {
            //Profile present, So Update

            cvpersonal = await CVmaster2.findOneAndUpdate(
                        { _aid: req.body.profile._aid }, 
                        { $set: profileFields }, 
                        { new: true }
                    );
            
            return res.json(cvpersonal);

        }

        //Create as findone is empty

        cvpersonal = new CVmaster2(profileFields);

        await cvpersonal.save();

        res.json(cvpersonal);
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
);

router.post('/edit', [auth, [
    check('dob', 'date of birth is required').not().isEmpty(),
    ]
],

async (req, res) => {

    console.log("Got in Server " + req.body._aid);
    
    const {
        _aid, _n, dob, g, crel, ccom
    } = req.body;

   // build profile object

    const profileFields = {};
    profileFields._aid = _aid;
    profileFields._n = _n;
    profileFields.dob = dob;
    profileFields.g = g;

    console.log(profileFields);

    try {

        let cvpersonal = await CVmaster2.findOne({ _aid: req.body._aid});

        console.log(cvpersonal);
        if(cvpersonal) {
            //Profile present, So Update

            cvpersonal = await CVmaster2.findOneAndUpdate(
                        { _aid: req.body._aid }, 
                        { $set: profileFields }, 
                        { new: true }
                    );
            
            return res.json(cvpersonal);

        }
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
);

router.post('/changestatus', [auth, [
    check('gappid', 'appln no required').not().isEmpty(),
    ]
],

async (req, res) => {

    console.log("Got in Server " + req.body.gappid);
    
    const {
        gappid, status
    } = req.body;

    
    // build profile object

    const profileFields = {};
    profileFields._aid = gappid;
    profileFields.status = status;
 
    console.log(profileFields);

    try {

        let cvpersonal = await CVmaster2.findOne({ _aid: req.body.gappid});

        console.log(cvpersonal);
        if(cvpersonal) {
            //Profile present, So Update

            cvpersonal = await CVmaster2.findOneAndUpdate(
                        { _aid: req.body.gappid }, 
                        { $set: profileFields }, 
                        { new: true }
                    );
            
            return res.json(cvpersonal);

        }

    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error in Appln Status Update');
    }
}
);

router.get('/cor/:user_id', async (req, res) => {
    try {
        console.log("querying " + req.params.user_id);
    
        let sp = (req.params.user_id).toString();        

        let cvpersonal = await CVmaster2.findOne({ _aid: req.params.user_id});
        console.log("found status " + cvpersonal);
        
        if(cvpersonal === null) {            
            console.log("Not Yet verified");
            return res.status(400).json({ msg: 'Complete Verification'});
        }
        
                
                console.log("return appln for coordinator");            
                //return res.status(400).json({ msg: 'Already Verified' });   
                res.json(cvpersonal);          

    } catch (err) {
      console.error("catched" + err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  });


router.get('/upd/:user_id', async (req, res) => {
    try {
        console.log("querying " + req.params.user_id);
    
        let sp = (req.params.user_id).toString();

        console.log("converted " + sp);

        let cvpersonal = await CVmaster2.findOne({ _aid: req.params.user_id});
        console.log("found status " + cvpersonal);
        
        if(cvpersonal === null) {            
            console.log("Not Yet verified");
            return res.status(400).json({ msg: 'Complete Verification'});
        }
        else {
            if(cvpersonal.status === 'ucomplete')
            {
                return res.status(400).json({ msg: 'Updation Completed' });       
            }
            else if(cvpersonal.status === 'toupdate')
            {
                console.log("return appln for update");            
                //return res.status(400).json({ msg: 'Already Verified' });   
                res.json(cvpersonal);                              
            }
            else if(cvpersonal.status === 'present') 
            {
                console.log("Complete Verification");            
                //return res.status(400).json({ msg: 'Already Verified' });   
                return res.status(400).json({ msg: 'Complete Verification' });  
            }
            else
            {
                return res.status(400).json({ msg: 'Application not for Update' });   
            }
        }

    } catch (err) {
      console.error("catched" + err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  });

  router.get('/ver/:user_id', async (req, res) => {
    try {
        console.log("querying " + req.params.user_id);
    
        let sp = (req.params.user_id).toString();

        console.log("converted " + sp);

        let cvpersonal = await CVmaster2.findOne({ _aid: req.params.user_id});
        console.log("found status " + cvpersonal);
        
        if(cvpersonal === null) {            
            console.log("Not Present");
            return res.status(400).json({ msg: 'Complete Attendance'});
        }
        else {
            if(cvpersonal.status === 'vcomplete')
            {
                return res.status(400).json({ msg: 'Application completed Verification' });       
            }
            else {
                if(cvpersonal.status === 'toupdate')
                {
                    return res.status(400).json({msg: 'Application Sent for Updation'});
                }
                else {
                console.log("return appln for verification");            
                //return res.status(400).json({ msg: 'Already Verified' });   
                res.json(cvpersonal);          }
            }
        }

    } catch (err) {
      console.error("catched" + err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  });

router.get('/user/:user_id', async (req, res) => {
    try {
        console.log("querying " + req.params.user_id);
    
        let sp = (req.params.user_id).toString();

        console.log("converted " + sp);

        let cvpersonal = await CVmaster2.findOne({ _aid: req.params.user_id});
        console.log("found status " + cvpersonal);
        
        if(cvpersonal === null) {            

            const profile = await Master.findOne({
                    _aid: req.params.user_id.toString()
            });
  
            if (!profile) return res.status(400).json({ msg: 'Wrong Application ID' });
                //console.log(profile);
            res.json(profile);
        }
        else {
            
            console.log("err return");            
            return res.status(400).json({ msg: 'Already marked attendance' });   
            res.json(cvpersonal);          
        }

    } catch (err) {
      console.error("catched" + err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  });

// POST api/getmaster

router.post('/', [auth, [
    check('gappid', 'Application number required').not().isEmpty()
] 
],

async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        gappid
    } = req.body;

    // build profile object

    try {
        console.log("quering for " + gappid);
        let valappid = await Master.findOne({ _aid: req.body.gappid});

        if(valappid) {
            //Profile present, So Update

        console.log("Application number present");                    

        }
        else {
            console.log("no such application id");
        }

        return res.json(valappid);

    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
);



module.exports = router;