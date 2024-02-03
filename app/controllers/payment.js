const axios = require("axios");
const crypto = require("crypto");
const UserModel = require("../model/user.js");
const bookModel = require("../model/book.js");
const Booking = require("../model/booking.js");

// Require the library
var paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);

exports.initializePayment = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const book = await bookModel.findById(req.body.bookId);
    if (!book) {
      return res.status(404).json({ message: "book not found." });
    }
    const response = await axios.post(
      `https://api.paystack.co/transaction/initialize`,
      {
        email: user.email,
        amount: book.price * 100,
        callback_url: `https://google.com`,
        currency: "NGN",
        metadata: {
          custom_fields: [
            {
              bookId: req.body.bookId,
              userId: req.body.userId,
            },
          ],
        },
      },
      {
        headers: { authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
      }
    );
    console.log("Request Payload:", {
      email: user.email,
      amount: book.price * 100,
      callback_url: `https://google.com`,
      currency: "NGN",
      metadata: {
        custom_fields: [
          {
            bookId: req.body.bookId,
            userId: req.body.userId,
          },
        ],
      },
    });

    res.status(200).json({
      status: "success",
      transaction: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.paystackWebhook = async (req, res, next) => {
  try {
    // 1. confirm that the event is from paystack by verifying the signature sent in the header of the request with the secret key
    const signature = req.headers["x-paystack-signature"];
    const hash = crypto
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
      .update(JSON.stringify(req.body))
      .digest("hex");
    if (hash !== signature) {
      return res.status(400).json({ message: "Invalid signature" });
    }

    // 2. confirm that the event is a successful transaction
    const { event, data } = req.body;
    if (event === "charge.success") {
      const { bookId, userId } = data.metadata;
      // console.log(items);
      // create a booking and update the tour date participants
      await Booking.create({
        bookingId: data.reference,
        book: bookId,
        user: userId,
        price: data.amount / 100,
        paidAt: data.paidAt,
      });
    }

    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while making payment",
    });
  }
};
