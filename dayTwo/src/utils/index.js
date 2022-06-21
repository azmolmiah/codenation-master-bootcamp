const fs = require("fs");

const addFilm = (filmObj) => {
  try {
    const stringyObj = JSON.stringify(filmObj);
    fs.writeFileSync(`${__dirname}/storage.json`, stringyObj);
  } catch (error) {
    console.log(error);
  }
};

const listFilms = () => {
  try {
    const filmList = fs.readFileSync(`${__dirname}/storage.json`);
    console.log(JSON.parse(filmList));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addFilm, listFilms };
