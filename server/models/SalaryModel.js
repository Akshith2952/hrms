const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true
  },
  basicSalary: {
    type: Number,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  accountNo: {
    type: String,
    required: true
  },
  accountHolderName: {
    type: String,
    required: true
  },
  ifscCode: {
    type: String,
    required: true
  },
  taxDeduction: {
    type: Number,
    required: true
  }
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;
