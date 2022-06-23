// Function to add a document in the Mongo DB Film collection
exports.addFilm = async (collection, filmObj) => {
  try {
    const addFilm = await collection.insertOne(filmObj);
    console.log(addFilm, "Film added successfully");
  } catch (error) {
    console.log(error);
  }
};

// Function to list all documents in the Mongo DB Film collection
exports.listFilms = async (collection) => {
  try {
    const listFilms = await collection.find().toArray();
    console.log(listFilms);
  } catch (error) {
    console.log(error);
  }
};

// Function to update a document in the Mongo DB Film collection
exports.updateFilm = async (collection, _id, newFilmObj) => {
  try {
    const updateFilm = await collection.updateOne(_id, newFilmObj);
    console.log(updateFilm, "Film updated successfully");
  } catch (error) {
    console.log(error);
  }
};

// Function to delete a document in the Mongo DB Film collection
exports.deleteFilm = async (collection, _id) => {
  try {
    const deleteFilm = await collection.findOneAndDelete(_id);
    console.log(deleteFilm, "Film deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

// Function to search by name actor rating in the Mongo DB Film collection
exports.searchFilms = async (collection, query) => {
  try {
    const searchFilms = await collection.find(query).toArray();
    console.log(searchFilms, `${searchFilms.length} films found`);
  } catch (error) {
    console.log(error);
  }
};
