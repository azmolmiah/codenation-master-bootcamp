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
  const collection = await connection();

  if (yargsObj.add) {
    await addFilm(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
      rating: yargsObj.rating,
    });
  } else if (yargsObj.list) {
    await listFilms(collection);
  } else if (yargsObj.update) {
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
  } else if (yargsObj.delete) {
    await deleteFilm(collection, { _id: ObjectId(yargsObj.id) });
  } else if (yargsObj.search) {
    let searchParams = {};
    if (yargsObj.title) {
      Object.assign(searchParams, { title: new RegExp(yargsObj.title, "i") });
    } else if (yargsObj.actor) {
      Object.assign(searchParams, { actor: new RegExp(yargsObj.actor, "i") });
    } else if (yargsObj.rating) {
      Object.assign(searchParams, { rating: new RegExp(yargsObj.rating, "i") });
    }
    await searchFilms(collection, searchParams);
  } else {
    console.log("Incorrect command");
  }

  await client.close();
};

app(yargs.argv);
