const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Salary = require('../models/SalaryModel');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'plz fill the details' });
    }

    if (email == 'hr@gmail.com' && password == 'hr123') {
      const token = jwt.sign({ _id: email }, process.env.SECRET_KEY);
      res.cookie('jwttoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httponly: true,
      });
      return res.json({ name: 'hr', email: email });
    }
    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      res.status(400).json({ message: 'user signin unsuccess' });
    } else {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (isMatch) {
        const token = jwt.sign({ _id: userLogin._id }, process.env.SECRET_KEY);
        res.cookie('jwttoken', token, {
          expires: new Date(Date.now() + 25892000000),
          httponly: true,
        });
        const salary = await Salary.find({ email });
        res.json({
          name: userLogin.name,
          email: userLogin.email,
          salary,
          token: token,
        });
      } else {
        res.status(400).json({ message: 'Invalid credentials' });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.register = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: 'plz fill the filds properly' });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: 'Email already Exists' });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: 'Email already Exists' });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      await user.save();

      res.status(201).json({ message: 'user registered sucessfully' });
    }
  } catch (err) {
    console.log(err);
  }
};
