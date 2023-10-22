const Salary = require('../models/SalaryModel');

const createSalary = async (req, res) => {
  try {
    const newSalary = new Salary(req.body);
    await newSalary.save();
    res
      .status(201)
      .json({ message: 'Salary created successfully', data: newSalary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.status(200).json({ data: salaries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getSalaryById = async (req, res) => {
  const { id } = req.params;
  try {
    const salary = await Salary.findById(id);
    if (!salary) {
      return res.status(404).json({ message: 'Salary not found' });
    }
    res.status(200).json({ data: salary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateSalaryById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSalary = await Salary.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSalary) {
      return res.status(404).json({ message: 'Salary not found' });
    }
    res
      .status(200)
      .json({ message: 'Salary updated successfully', data: updatedSalary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteSalaryById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSalary = await Salary.findByIdAndDelete(id);
    if (!deletedSalary) {
      return res.status(404).json({ message: 'Salary not found' });
    }
    res
      .status(200)
      .json({ message: 'Salary deleted successfully', data: deletedSalary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createSalary,
  getAllSalaries,
  getSalaryById,
  updateSalaryById,
  deleteSalaryById,
};
