const Employee = require('../models/EmployeeModel');

// Create new employee
const createEmployee = async (req, res) => {
  try {
    const {
      email,
      password,
      role,
      gender,
      name,
      dateOfBirth,
      contactNumber,
      employeeCode,
      department,
      dateOfJoining
    } = req.body;

    const newEmployee = new Employee({
      email,
      password,
      role,
      gender,
      name,
      dateOfBirth,
      contactNumber,
      employeeCode,
      department,
      dateOfJoining
    });

    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully', data: newEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update existing employee
const updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: 'Employee updated successfully', data: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ data: employees });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single employee by id
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ data: employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete employee by id
const deleteEmployeeById = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully', data: deletedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createEmployee,
  updateEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
};
