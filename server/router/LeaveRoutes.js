const express = require('express');
const router = express.Router();
const leaveController = require('../Controllers/LeaveApplicationController');

// GET all leave applications
router.get('/', leaveController.getAllLeaves);

// GET a single leave application by ID
router.get('/:id', leaveController.getLeaveById);

// POST a new leave application
router.post('/', leaveController.createLeave);

// PUT update an existing leave application by ID
router.put('/:id', leaveController.updateLeaveById);

// DELETE an existing leave application by ID
router.delete('/:id', leaveController.deleteLeaveById);

module.exports = router;
