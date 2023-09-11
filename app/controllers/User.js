const UserModel = require("../model/user");

exports.create = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.phone) {
      return res.status(400).json({ message: "Content can not be empty!" });
    }

    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    const data = await user.save();
    res.status(201).json({
      message: "User created successfully!",
      user: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating user",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Data to update can not be empty!" });
    }
    const id = req.params.id;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: error.messgae || `User not found!` });
    }
    res.status(201).json({ message: "User updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.destroy = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
