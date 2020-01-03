const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Personal = require('../../models/Personal');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

//GET api/profile/me

router.get('/me', auth, async(req, res) => {
    try {
            //from token
        const personal = await Personal.findOne({ user: req.user.id }).populate('user', 
        ['parentname', 'dob']);
        
        if(!personal) {
            return res.status(400).json({ msg: 'There is no personal profile for this user'})
        }
        
        res.json(personal);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// POST api/personal

router.post('/', [auth, [
    check('dob', 'date of birth is required').not().isEmpty(),
    check('permanentaddress', 'Permanent Address is required').not().isEmpty()
] 
],

async (req, res) => {

    console.log("Got in Server");

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        parentname, commnaddress, nativedistrict, civicnative, permanentaddress,
        permanentpincode, dob, gender, commnpincode
    } = req.body;

    // build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if(parentname) profileFields.parentname = parentname;
    if(dob) profileFields.dob = dob;
    if(permanentpincode) profileFields.permanentpincode = permanentpincode;
    if(civicnative) profileFields.civicnative = civicnative;
    if(nativedistrict) profileFields.nativedistrict = nativedistrict;
    if(commnaddress) {    
        //profileFields.commnaddress = commnaddress.split(',').map(addr => addr.trim());
        profileFields.commnaddress = commnaddress;
    }
    if(permanentaddress) {    
        //profileFields.permanentaddress = permanentaddress.split(',').map(addr => addr.trim());
        profileFields.permanentaddress = permanentaddress;
    }
    if(gender) profileFields.gender = gender;
    if(commnpincode) profileFields.commnpincode = commnpincode;

    console.log(profileFields);

    try {

        let personal = await Personal.findOne({ user: req.user.id});

        if(personal) {
            //Profile present, So Update

            personal = await Personal.findOneAndUpdate(
                        { user: req.user.id }, 
                        { $set: profileFields }, 
                        { new: true }
                    );
            
            return res.json(personal);

        }

        //Create as findone is empty

        personal = new Personal(profileFields);

        await personal.save();

        res.json(personal);
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
);



module.exports = router;