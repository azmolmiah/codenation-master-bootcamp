const fs = require("fs");
const yargs = require("yargs");

const Movie = require("./utils");

const addMovie = (yargsObj) => {
  const jsonFile = fs.readFileSync(`${__dirname}/movies.json`);
  let json = JSON.parse(jsonFile);

  try {
    if (yargsObj.add) {
      const movie = new Movie(yargs.argv.name, yargs.argv.actor);
      json.push(movie.add());
      fs.writeFileSync(`${__dirname}/movies.json`, JSON.stringify(json));
      console.log(json);
    } else {
      throw new TypeError(
        "To Add: Example command node src/app.js --add --name Spiderman --actor Spidey"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

addMovie(yargs.argv);
