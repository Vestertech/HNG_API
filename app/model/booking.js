const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: [true, "Booking must have a bookingId"],
      unique: true,
    },
    book: {
      type: mongoose.Schema.ObjectId,
      ref: "Book",
      required: [true, "Booking must belong to a book"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Booking must belong to a user"],
    },
    price: {
      type: Number,
      required: [true, "Booking must have a price"],
    },
    paid: {
      type: Boolean,
      default: true,
    },

    paidAt: {
      type: Date,
      required: [true, "Booking must have a paidAt date"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

bookingSchema.pre("/^find/", function (next) {
  this.populate("user")
    .populate({
      path: "user",
      select: "name email ",
    })
    .populate("book");
  return next();
});

const bookings = mongoose.model("Booking", bookingSchema);

module.exports = bookings;
