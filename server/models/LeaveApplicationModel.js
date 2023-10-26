const mongoose = require('mongoose');

const leaveApplicationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  leaveStatus: {
    type: String,
    default: 'Pending',
  },
});

const LeaveApplication = mongoose.model(
  'LeaveApplication',
  leaveApplicationSchema,
);

module.exports = LeaveApplication;
