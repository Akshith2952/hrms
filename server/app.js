const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const employeeRoutes = require('./router/EmployeeRoutes');
const salaryRoutes = require('./router/SaalaryRoutes');
const LeaveRoutes = require('./router/LeaveRoutes');
const userRoutes = require('./router/user');
app.use(cors({ origin: '*' }));

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// Middelware
const middleware = (req, res, next) => {
  console.log(`Hello my Middleware`);
  next();
};

// app.get('/', (req, res) => {
//     res.send(`Hello world from the server app.js`);
// });

app.get('/about', middleware, (req, res) => {
  console.log(`Hello my About`);
  res.send(`Hello About world from the server`);
});

app.get('/contact', (req, res) => {
  //res.cookie("test","akshith");
  res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
  res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
  res.send(`Hello Registration world from the server`);
});

app.use('/employees', employeeRoutes);

app.use('/salary', salaryRoutes);

app.use('/leaves', LeaveRoutes);

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
