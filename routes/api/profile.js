const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

//GET api/profile/me

router.get('/me', auth, async(req, res) => {
    try {
            //from token
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', 
        ['name', 'email', 'mobnum']);
        
        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user'})
        }
        
        res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// POST api/profile

router.post('/', [auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty()
] 
],

async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        company, website, location, bio, status, githubusername, skills, 
        youtube, facebook, twitter, instagram, linkedin
    } = req.body;

    // build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if(company) profileFields.company = company;
    if(website) profileFields.website = website;
    if(location) profileFields.location = location;
    if(bio) profileFields.bio = bio;
    if(status) profileFields.status = status;
    if(githubusername) profileFields.githubusername = githubusername;
    if(skills) {    
        profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    //Build social object arr

    profileFields.social = {}
    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(facebook) profileFields.social.facebook = facebook;
    if(linkedin) profileFields.social.linkedin = linkedin;
    if(instagram) profileFields.social.instagram = instagram;

    console.log(profileFields);

    try {

        let profile = await Profile.findOne({ user: req.user.id});

        if(profile) {
            //Profile present, So Update

            profile = await Profile.findOneAndUpdate(
                        { user: req.user.id }, 
                        { $set: profileFields }, 
                        { new: true }
                    );
            
            return res.json(profile);

        }

        //Create as findone is empty

        profile = new Profile(profileFields);

        await profile.save();

        res.json(profile);
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
);


//GET api/profile/

router.get('/', async (req, res) => {

    try{

        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);

    }catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

})

//GET api/profile/user/:user_id

router.get('/user/:user_id', async (req, res) => {

    try{

        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

        if(!profile)
            return res.status(400).json({ msg: 'There is no profile for this user'});

        res.json(profile);

    }catch(err) {

        console.error(err.message);

        if(err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile ID wrong'});
        }
        res.status(500).send('Server error');
    }

})

module.exports = router;