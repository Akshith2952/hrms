const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/EmployeeController');

// Routes
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.post('/add', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployeeById);

module.exports = router;
