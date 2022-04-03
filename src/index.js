require("dotenv").config();
const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const bagController = require("./controllers/bag.controller");
const movieController = require("./controllers/movies.controller");
const entertainmentController = require("./controllers/entertainment.controller");
const premiereController = require("./controllers/premiere.controller");
const laughterController = require("./controllers/laughter.controller");
const { register, login } = require("./controllers/auth.controller");
const { body } = require("express-validator");



const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userController);
app.use("/bag", bagController);
app.use("/movies", movieController);
app.use("/movies/:id", movieController);
app.use("/premiere", premiereController);
app.use("/laughter", laughterController);
app.use("/entertainment", entertainmentController)


app.post("/register", body("email").notEmpty(), register);
app.post("/login", login);

app.listen(process.env.PORT || 5500, async function () {
  try {
    await connect();
    console.log("app is listening on port 5500");
  } catch (err) {
    console.log(err.message);
  }
});
