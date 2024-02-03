const express = require("express");
const UserController = require("../controllers/User");
// const PaymentController = require("../controllers/payment");
const router = express.Router();

router.get("/", UserController.findAll);
router.get("/:id", UserController.findOne);
router.post("/", UserController.create);
router.patch("/:id", UserController.update);
router.delete("/:id", UserController.destroy);
router.post("/createBook", UserController.createBook);
module.exports = router;
