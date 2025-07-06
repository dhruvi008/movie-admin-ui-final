
const Movie = require("../models/movieModel");

module.exports.showMovies = async (req, res) => {
    const allMovies = await Movie.find({});
    res.render("Home", { allMovies });
};

module.exports.addMovie = async (req, res) => {
    if (req.files["poster_img"]) {
        req.body.poster_img = Movie.imagePath + "/" + req.files["poster_img"][0].filename;
    }
    if (req.files["background_img"]) {
        req.body.background_img = Movie.imagePath + "/" + req.files["background_img"][0].filename;
    }
    await Movie.create(req.body);
    res.redirect("/");
};

module.exports.addMoviePage = (req, res) => {
    res.render("addMovie");
};

module.exports.viewMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("viewMovie", { movie });
};
