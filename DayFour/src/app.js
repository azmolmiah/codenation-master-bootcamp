require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  updateMovies,
  deleteMovies,
  searchMovies,
} = require("./movies/movieMethods");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(await listMovies());
    } else if (yargsObj.list) {
      console.log(await listMovies());
    } else if (yargsObj.update) {
      await updateMovie(yargsObj.id, {
        title: yargsObj.title,
        actor: yargsObj.actor,
        rating: yargsObj.rating,
      });
      console.log(
        `Movie: ${yargsObj.title} updated successfully`,
        await listMovies()
      );
    } else if (yargsObj.updateMany) {
      let updateParams = {};
      if (yargsObj.actor) {
        Object.assign(updateParams, { actor: new RegExp(yargsObj.actor, "i") });
      } else if (yargsObj.rating) {
        Object.assign(updateParams, {
          rating: new RegExp(yargsObj.rating, "i"),
        });
      } else {
        console.log(
          "Please enter command like: --updateMany with either one or more parameters (--actor, --rating) and a value"
        );
      }
      await updateMovies(updateParams);
      console.log(
        `All movies updated successfully with { title: ${yargsObj.actor} }`,
        await listMovies()
      );
    } else if (yargsObj.delete) {
      await deleteMovie({ _id: yargsObj.id });
      console.log(
        `Movie with Id ${yargsObj.id} deleted successfully`,
        await listMovies()
      );
    } else if (yargsObj.deleteMany) {
      const _ids = yargs.array("ids").parse().ids;
      await deleteMovies({ _id: { $in: _ids } });
      console.log(
        `Movies with Id's ${_ids} deleted successfully`,
        await listMovies()
      );
    } else if (yargsObj.search) {
      let searchParams = {};
      if (yargsObj.title) {
        Object.assign(searchParams, { title: new RegExp(yargsObj.title, "i") });
      } else if (yargsObj.actor) {
        Object.assign(searchParams, { actor: new RegExp(yargsObj.actor, "i") });
      } else if (yargsObj.rating) {
        Object.assign(searchParams, {
          rating: new RegExp(yargsObj.rating, "i"),
        });
      } else {
        console.log(
          "Please enter command like: --search with either one or more parameters (--title, --actor, --rating) and a value"
        );
      }
      await searchMovies(searchParams);
    } else {
      console.log("Incorrect command");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
