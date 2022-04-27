const express = require('express');
const User = require('../Models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "somestring"

router.post('/signup',[
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email',"enter a valid email").isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
      }
      // check weather the user already exists
      try{
      let user = await User.findOne({ email: req.body.email});
      if(user)
      {
          return res.status(400).json({ success, error: "user already exists"})
      }
      const salt = await bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

       user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      data = {user:{
            id: user.id,
      }
    }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
    res.json({success, authtoken})
      }
    catch(error){
        console.log(error.message);
        res.status(500).send("some error occured");

    };



    
    
})
// router.post("/signup",async (req,res)=>{
//   const newuser=new User({name:req.body.name,email:req.body.email,password:req.body.password})
//   try{
//       const user=await newuser.save()
//       res.send('User Registered Successfully')
//   }catch(err){
//       return res.status(400).json({error});
//   }
// });

router.post('/login',[
    body('email',"enter a valid email").isEmail(),
    body('password',"password cannot be blank").exists(),
], async (req, res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
      }
      const {email, password} = req.body;
      try {
          let user = await User.findOne({email});
          if(!user)
          {
            return res.status(400).json({success, error:"please enter correct credentials"})
          }
          const paswordCompare =await bcrypt.compare(password, user.password)
          if(!paswordCompare)
          {
            return res.status(400).json({success, error:"please enter correct credentials"});
          }
         const payload = {user:{
            id: user.id,
      }
    }
      const authtoken = jwt.sign(payload, JWT_SECRET);
      success = true;
      res.json({success, authtoken})
          
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error occured");
      }
})


module.exports = router