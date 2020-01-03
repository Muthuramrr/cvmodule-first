const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/TFCUser2');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/reg',
  [
    check('username', 'Name is required')
      .not()
      .isEmpty(),
    
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),    

    check('tfcname', 'Pls enter TFC Name').not().isEmpty(),
     
  ],
  async (req, res) => {
    console.log("In Server" + req.body);
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, tfcname, ltype } = req.body;
    console.log(req.body);

    let user = await User.findOne({ username });
      
            if (user) {
              return res
                .status(400)
                .json({ errors: [{ msg: 'Select different username; already registered' }] });
            }

      user = new User({        
        username,           
        password,        
        tfcname,
        ltype
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
  }
  
);

router.post(
  '/',
  [
    check('username', 'Name is required')
      .not()
      .isEmpty(),
    
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),    

    check('tfcname', 'Pls enter TFC Name').not().isEmpty(),
     
  ],
  async (req, res) => {
    console.log("In Server" + req.body);
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, district, tfcname, ltype } = req.body;
    console.log(req.body);

    let user = await User.findOne({ username });
      
            if (user) {
              return res
                .status(400)
                .json({ errors: [{ msg: 'Select different username; already registered' }] });
            }

      user = new User({        
        username,           
        password,
        district,
        tfcname,
        ltype
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
  }
  
);
module.exports = router;
