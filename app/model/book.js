const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please What's your name?"],
  },
  price: Number,
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
