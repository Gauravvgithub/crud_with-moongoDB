const express = require("express");
const connectDB = require("./models/DB");
const app = express();
const engine = require("express-handlebars").engine;
const userRouter = require("./controllers/routes");

connectDB();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
// app.use("/emp", require("./controllers/routes"));
app.use('/emp', userRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
