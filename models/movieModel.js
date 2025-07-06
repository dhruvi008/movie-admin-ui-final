
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const IMAGE_PATH = "/uploads";

const movieSchema = new mongoose.Schema({
    moviename: String,
    ratings: Number,
    age_restriction: String,
    dimensions: [String],
    language: [String],
    geners: [String],
    relising_date: String,
    hour: Number,
    min: Number,
    desc: String,
    poster_img: String,
    background_img: String
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, "..", IMAGE_PATH)),
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
});

movieSchema.statics.uploadImages = multer({ storage }).fields([
    { name: "poster_img" }, { name: "background_img" }
]);
movieSchema.statics.imagePath = IMAGE_PATH;

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
