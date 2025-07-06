
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/movie_admin");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("MongoDB connected"));
module.exports = db;
