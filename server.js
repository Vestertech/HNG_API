const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/api", (req, res) => {
//   res.json({
//     message: "Welcome to Sylvester's HNG_API",
//   });
// });
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

const uri = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connected Successfully!!");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });

const Port = process.env.PORT;
const server = app.listen(Port, () => {
  console.log(`Server is running on ${Port}... `);
});

//   Routes
const UserRoute = require("./app/routes/User");
app.use("/api", UserRoute);
