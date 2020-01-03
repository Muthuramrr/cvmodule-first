const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Special = require('../../models/Special');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

//GET api/special/me

router.get('/me', auth, async(req, res) => {
    try {
            //from token
        const special = await Special.findOne({ user: req.user.id }).populate('user', 
        ['cvcenter']);
        
        if(!special) {
            return res.status(400).json({ msg: 'There is no Special profile for this user'})
        }
        
        res.json(special);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// POST api/special

router.post('/', [auth, [
    check('cvcenter', 'TFC Center for Certificate Verification is required').not().isEmpty()
] 
],

async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        sports, exserviceman, phychallenged, cvcenter, paymentstatus
    } = req.body;

    // build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if(sports) profileFields.sports = sports;
    if(exserviceman) profileFields.exserviceman = exserviceman;
    if(phychallenged) profileFields.phychallenged = phychallenged;
    if(cvcenter) profileFields.cvcenter = cvcenter;
    profileFields.paymentstatus = paymentstatus;    

    console.log(profileFields);

    try {

        let special = await Special.findOne({ user: req.user.id});

        if(special) {
            //Profile present, So Update

            special = await Special.findOneAndUpdate(
                        { user: req.user.id }, 
                        { $set: profileFields }, 
                        { new: true }
                    );
            
            return res.json(special);

        }

        //Create as findone is empty

        special = new Special(profileFields);

        await special.save();

        res.json(special);
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
);



module.exports = router;