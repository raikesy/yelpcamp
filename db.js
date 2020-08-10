const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://dbAdmin:ag2NDlLehYQ3DJI3@thewdb-yelpcamp.hyr6h.azure.mongodb.net/demo?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true });

const run = async () => {
  try {
    await client.connect();

    const database = client.db("demo");
    await database.command({ ping: 1 });
    console.log("Successfully connected to server");

    const collection = database.collection("campsites");
    await collection.insertOne({ name: "Rocky Reserve", location: "Bermuda" });
    const result = await collection.find({}).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
};

run().catch(console.dir);
