const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please What's your name?"],
  },
  email: String,
  phone: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
