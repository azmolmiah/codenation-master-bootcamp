exports.addFilm = async (collection, filmObj) => {
  try {
    const addFilm = await collection.insertOne(filmObj);
    console.log(addFilm);
    console.log("Film added successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.listFilms = async (collection) => {
  try {
    const listFilms = await collection.find().toArray();
    console.log(listFilms);
  } catch (error) {
    console.log(error);
  }
};

// Create function to update
exports.updateFilm = async (collection, _id, newFilmObj) => {
  try {
    const updateFilm = await collection.updateOne(_id, newFilmObj);
    console.log(updateFilm);
    console.log("Film updated successfully");
  } catch (error) {
    console.log(error);
  }
};

// Create function to delete
exports.deleteFilm = async (collection, _id) => {
  try {
    const deleteFilm = await collection.findOneAndDelete(_id);
    console.log(deleteFilm);
    console.log("Film deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

// Create function to search by name actor rating
exports.searchFilms = async (collection, query) => {
  try {
    const searchFilms = await collection.find(query).toArray();
    console.log(searchFilms);
  } catch (error) {
    console.log(error);
  }
};
