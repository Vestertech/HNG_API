const express = require("express");
// const bookingController = require("../controllers/payment");
const PaymentController = require("../controllers/payment");
const router = express.Router();

router.post("/initializePayment", PaymentController.initializePayment);
router.post("/paystackWebhook", PaymentController.paystackWebhook);

module.exports = router;
