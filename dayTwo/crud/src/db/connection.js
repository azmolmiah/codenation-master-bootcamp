require("dotenv").config();

const { MongoClient, ObjectId } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
  try {
    await client.connect();
    console.log("Successfully connected to Mongo DB");
    const db = client.db("Films");
    return db.collection("Films");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connection, ObjectId, client };
