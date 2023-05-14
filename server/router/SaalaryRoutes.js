const express = require('express');
const router = express.Router();
const salaryController = require('../Controllers/SalaryController');

// Create salary
router.post('/', salaryController.createSalary);

// Get all salaries
router.get('/', salaryController.getAllSalaries);

// Get salary by ID
router.get('/:id', salaryController.getSalaryById);

// Update salary by ID
router.put('/:id', salaryController.updateSalaryById);

// Delete salary by ID
router.delete('/:id', salaryController.deleteSalaryById);

module.exports = router;
