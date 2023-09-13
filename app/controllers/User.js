const UserModel = require("../model/user");

// Create and Save a new user
exports.create = async (req, res) => {
  try {
    // Validate input fields as strings
    const { name, email, phone } = req.body;
    if (typeof name !== "string") {
      return res
        .status(400)
        .json({ message: "Field data types should be strings." });
    }

    const user = new UserModel({
      name,
      email,
      phone,
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
        .json({ message: error.message || `User not found!` });
    }
    res.status(201).json({ message: "User updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user with the specified id in the request or a name
exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.query;

    let user;
    if (id) {
      user = await UserModel.findByIdAndRemove(id);
    } else if (name) {
      user = await UserModel.findOneAndRemove({
        $or: [{ name }],
      });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
