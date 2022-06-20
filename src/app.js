const fs = require("fs");
const Movie = require("./utils");
const input = process.argv;

const jsonFile = fs.readFileSync(
  "/Users/codenation/Documents/Master38/WeekSeven/src/movies.json"
);
let json = JSON.parse(jsonFile);

if (input[2] === "add") {
  const movie = new Movie(input[3], input[4]);
  json.push(movie.add());
  fs.writeFileSync(
    "/Users/codenation/Documents/Master38/WeekSeven/src/movies.json",
    JSON.stringify(json)
  );
}

console.log(json);
