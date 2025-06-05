const express = require("express");
const connectDB = require("./models/DB");
const app = express();
const engine = require("express-handlebars").engine;
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

connectDB();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    //...implement newly added insecure prototype access
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
app.use("/emp", require("./controllers/routes"));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
