const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync({ alter: true });
    if (yargsObj.add) {
      // Add to movie table
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.list) {
      // List movie table
      await listMovies();
    } else if (yargsObj.update) {
      // Update one entry in movie table
      await updateMovie(
        { title: yargsObj.newTitle, actor: yargsObj.newActor },
        { where: { id: yargsObj.id } }
      );
    } else if (yargsObj.delete) {
      // Delete one entry from movie table
      await deleteMovie({ where: { id: yargsObj.id } });
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
};

app(yargs.argv);
