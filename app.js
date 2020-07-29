const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.locals.campgrounds = [
  {
    name: "Salmon Creek",
    image: "http://weknowyourdreams.com/images/camping/camping-08.jpg",
  },
  {
    name: "Granite Hill",
    image: "http://weknowyourdreams.com/images/camping/camping-07.jpg",
  },
  {
    name: "Mountain Goat's Rest",
    image:
      "https://cdn.vox-cdn.com/thumbor/FMUIaXcnBaKK9YqdP8qtxUog150=/0x0:4741x3161/1200x800/filters:focal(1992x1202:2750x1960)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg",
  },
  {
    name: "Salmon Creek",
    image: "http://weknowyourdreams.com/images/camping/camping-08.jpg",
  },
  {
    name: "Granite Hill",
    image: "http://weknowyourdreams.com/images/camping/camping-07.jpg",
  },
  {
    name: "Mountain Goat's Rest",
    image:
      "https://cdn.vox-cdn.com/thumbor/FMUIaXcnBaKK9YqdP8qtxUog150=/0x0:4741x3161/1200x800/filters:focal(1992x1202:2750x1960)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg",
  },
  {
    name: "Salmon Creek",
    image: "http://weknowyourdreams.com/images/camping/camping-08.jpg",
  },
  {
    name: "Granite Hill",
    image: "http://weknowyourdreams.com/images/camping/camping-07.jpg",
  },
  {
    name: "Mountain Goat's Rest",
    image:
      "https://cdn.vox-cdn.com/thumbor/FMUIaXcnBaKK9YqdP8qtxUog150=/0x0:4741x3161/1200x800/filters:focal(1992x1202:2750x1960)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("landing");
});

app
  .route("/campgrounds")
  .get((req, res) => {
    res.render("campgrounds", app.locals);
  })
  .post((req, res) => {
    app.locals.campgrounds = [...app.locals.campgrounds, req.body];
    res.redirect(303, "/campgrounds")
  });

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
