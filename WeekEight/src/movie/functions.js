const Movie = require("./table");

exports.addMovie = async (movieObj) => {
  try {
    const response = await Movie.create(movieObj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    const response = await Movie.findAll();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (movieParams, movieId) => {
  try {
    const response = await Movie.update(movieParams, movieId);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieId) => {
  try {
    const response = await Movie.destroy(movieId);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
