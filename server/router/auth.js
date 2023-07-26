const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

//using promises
// router.post('/register', (req, res) => {

//     const{name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"plz fill the filds properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already Exists"});
//         }
//         const user = new User({name,email, phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered sucessfully"});
//         }).catch((err)=>res.status(500).json({error:"failed to registered"}));
//     }).catch(err=>{console.log(err);});

//     //res.json({ message: req.body });
//     //res.send("mera register page");
// });

//using asyn await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill the filds properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Email already Exists" });
    } else {
      //middleware(hashing)
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();

      res.status(201).json({ message: "user registered sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route
router.post("/signin", async (req, res) => {
  //console.log(req.body);
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the details" });
    }

    const userLogin = await User.findOne({ email: email });
    //console.log(userLogin);

    if (!userLogin) {
      res.status(400).json({ message: "user signin unsuccess" });
    } else {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httponly: true,
      });
      if (isMatch) {
        //res.json({message:"user signin successfully"});
        res.json({ name: userLogin.name, email: userLogin.email });
      } else {
        res.status(400).json({ message: "Invalid credentials" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
