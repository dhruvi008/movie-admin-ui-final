
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./config/db");
const app = express();
const port = 8005;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/movie.routes");
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
