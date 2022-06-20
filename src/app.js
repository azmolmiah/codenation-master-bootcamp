const fs = require("fs");
const Movie = require("./utils");
const input = process.argv;

const jsonFile = fs.readFileSync(__dirname + "/movies.json");
let json = JSON.parse(jsonFile);

if (input[2] === "add") {
  const movie = new Movie(input[3], input[4]);
  json.push(movie.add());
  fs.writeFileSync(__dirname + "/movies.json", JSON.stringify(json));
}

console.log(json);
