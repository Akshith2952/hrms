const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  try {
    let password = await bcrypt.hash(req.body.password, 3);
    const { email, name, phone, work } = req.body;

    const newUser = new User({
      email,
      password,
      name,
      work,
      phone,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: 'User created successfully', data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      message: 'User deleted successfully',
      data: deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUserById,
  getAllUsers,
  getUserById,
};
