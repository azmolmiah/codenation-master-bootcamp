const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async (movieObject) => {
  try {
    await Movie.create(movieObject);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    return await Movie.find({});
  } catch (error) {
    console.log(error);
  }
};

// create an update one or update many function
exports.updateMovie = async (movie_id, movieObject) => {
  try {
    await Movie.findByIdAndUpdate(movie_id, movieObject);
  } catch (error) {
    console.log(error);
  }
};

// Update many
exports.updateMovies = async (actorsProperty) => {
  try {
    await Movie.updateMany(actorsProperty);
  } catch (error) {
    console.log(error);
  }
};

// create a delete one or delete many function.
exports.deleteMovie = async (movie_id) => {
  try {
    await Movie.deleteOne(movie_id);
  } catch (error) {
    console.log(error);
  }
};

// Delete many
exports.deleteMovies = async (movies_id) => {
  try {
    await Movie.deleteMany(movies_id);
  } catch (error) {
    console.log(error);
  }
};

// Search
exports.searchMovies = async (query) => {
  try {
    console.log(await Movie.find(query));
  } catch (error) {
    console.log(error);
  }
};
