const express = require("express");
const UserController = require("../controllers/User");
const router = express.Router();

router.get("/api/", UserController.findAll);
router.get("/api/:id", UserController.findOne);
router.post("/api/", UserController.create);
router.patch("/api/:id", UserController.update);
router.delete("/api/:id", UserController.destroy);

module.exports = router;
