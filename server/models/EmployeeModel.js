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
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  employeeCode: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  dateOfJoining: {
    type: Date,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;