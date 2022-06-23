const yargs = require("yargs");
const { connection, ObjectId, client } = require("./db/connection");
const {
  addFilm,
  listFilms,
  updateFilm,
  deleteFilm,
  searchFilms,
} = require("./utils");

const app = async (yargsObj) => {
  // Connect to MongoDB
  const collection = await connection();

  if (yargsObj.addFilm) {
    // Add film yargs option
    await addFilm(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
      rating: yargsObj.rating,
    });
  } else if (yargsObj.listAllFilm) {
    // List films yargs option
    await listFilms(collection);
  } else if (yargsObj.updateOneFilm) {
    // Update film yargs option
    await updateFilm(
      collection,
      { _id: new ObjectId(yargsObj.id) },
      {
        $set: {
          title: yargsObj.newTitle,
          actor: yargsObj.newActor,
          rating: yargsObj.newRating,
        },
      }
    );
  } else if (yargsObj.updateMany) {
    // Update many films yargs option
  } else if (yargsObj.deleteOneFilm) {
    // Delete film yargs option
    await deleteFilm(collection, { _id: ObjectId(yargsObj.id) });
  } else if (yargsObj.deleteMany) {
    // Delete many films yargs option
  } else if (yargsObj.searchFilms) {
    // Search films yargs option
    let searchParams = {};
    if (yargsObj.title) {
      Object.assign(searchParams, { title: new RegExp(yargsObj.title, "i") });
    } else if (yargsObj.actor) {
      Object.assign(searchParams, { actor: new RegExp(yargsObj.actor, "i") });
    } else if (yargsObj.rating) {
      Object.assign(searchParams, { rating: new RegExp(yargsObj.rating, "i") });
    } else {
      console.log(
        "Please enter command like: --search with either one or more parameters (--title, --actor and --rating) and a value"
      );
    }
    await searchFilms(collection, searchParams);
  } else {
    console.log(
      "Please enter command like: node src/app.js with one option (--add, --list, --update, --delete, and --search)"
    );
  }

  await client.close();
};

app(yargs.argv);
