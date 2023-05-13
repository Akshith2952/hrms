const Leave = require('../models/LeaveApplicationModel');

// Create a new leave application
const createLeave = async (req, res) => {
  try {
    const { employeeName, leaveType, startDate, endDate, reason } = req.body;
    const newLeave = new Leave({
        employeeName,
      leaveType,
      startDate,
      endDate,
      reason,
      leaveStatus: 'Pending'
    });
    await newLeave.save();
    res.status(201).json({ message: 'Leave application created successfully', data: newLeave });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all leave applications
const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json({ data: leaves });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single leave application by ID
const getLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).json({ message: 'Leave application not found' });
    }
    res.json({ data: leave });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a leave application by ID
const updateLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).json({ message: 'Leave application not found' });
    }
    leave.leaveStatus = req.body.leaveStatus || leave.leaveStatus;
    await leave.save();
    res.json({ message: 'Leave application updated successfully', data: leave });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteLeaveById = async (req, res) => {
    const { id } = req.params;
    try {
      const leave = await Leave.findById(id);
      if (!leave) {
        return res.status(404).json({ message: 'Leave not found' });
      }
      await leave.remove();
      res.json({ message: 'Leave deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports = {
  createLeave,
  getAllLeaves,
  getLeaveById,
  updateLeaveById,
  deleteLeaveById
};
