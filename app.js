const express = require("express");
const exphbs = require("express-handlebars");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

const uri =
  "mongodb+srv://dbAdmin:ag2NDlLehYQ3DJI3@thewdb-yelpcamp.hyr6h.azure.mongodb.net/yelp_camp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const campsitesCollection = client
  .connect()
  .then((connection) => connection.db().collection("campsites"));

app.get("/", (req, res) => {
  res.render("landing");
});

app
  .route("/campgrounds")
  .get(async (req, res) => {
    const result = campsitesCollection.then((collection) =>
      collection.find({}).toArray()
    );
    res.render("campgrounds", { campsites: await result });
  })
  .post(async (req, res) => {
    // app.locals.campgrounds = [...app.locals.campgrounds, req.body];
    await campsitesCollection.then((collection) => collection.insertOne(req.body))
    res.redirect(303, "/campgrounds");
  });

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
