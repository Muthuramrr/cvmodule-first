const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Academic = require('../../models/Academic');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

//GET api/academic/me

router.get('/me', auth, async(req, res) => {
    try {
            //from token
        const academic = await Academic.findOne({ user: req.user.id }).populate('user', 
        ['school', 'registerno']);
        
        if(!academic) {
            return res.status(400).json({ msg: 'There is no personal profile for this user'})
        }
        
        res.json(academic);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// POST api/academic

router.post('/', [auth, [
    check('registerno', 'register no is required').not().isEmpty()
] 
],

async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        school, district, state, registerno, maths, physics, chemistry, optional        
    } = req.body;

    // build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if(school) profileFields.school = school;
    if(district) profileFields.district = district;
    if(state) profileFields.state = state;
    if(maths) profileFields.maths = maths;
    if(physics) profileFields.physics = physics;
    if(chemistry) profileFields.chemistry = chemistry;
    if(optional) profileFields.optional = optional;
    if(registerno) profileFields.registerno = registerno;

    console.log(profileFields);

    try {

        let academic = await Academic.findOne({ user: req.user.id});

        if(academic) {
            //Profile present, So Update

            academic = await Academic.findOneAndUpdate(
                        { user: req.user.id }, 
                        { $set: profileFields }, 
                        { new: true }
                    );
            
            return res.json(academic);

        }

        //Create as findone is empty

        academic = new Academic(profileFields);

        await academic.save();

        res.json(academic);
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
);



module.exports = router;