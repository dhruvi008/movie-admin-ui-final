
const express = require("express");
const router = express.Router();
const movieCtrl = require("../controllers/movie.controller");
const Movie = require("../models/movieModel");

router.get("/", movieCtrl.showMovies);
router.get("/addMoviePage", movieCtrl.addMoviePage);
router.get("/viewMovie/:id", movieCtrl.viewMovie);
router.post("/addmovie", Movie.uploadImages, movieCtrl.addMovie);

module.exports = router;
