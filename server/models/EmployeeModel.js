const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'employee'
  },
  gender: {
    type: String,
  },
  name: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  employeeCode: {
    type: String,
    unique: true
  },
  department: {
    type: String,
  },
  dateOfJoining: {
    type: String,
  },
  university:{
    type:String
  },
  degree:{
    type:String
  },
  grade:{
    type:String
  },
  yearOfPassing:{
    type:String
  },
  dependentName:{
    type:String
  },
  dependentRelation:{
    type:String
  },
  dependentDOB:{
    type:String
  },
  dependentOccupation:{
    type:String
  },
  address:{
    type:String
  },
  previousJob:{
    type:String
  },
  previousCompany:{
    type:String
  },
  startDate:{
    type:String
  },
  endDate:{
    type:String
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;