const mongoose = require("mongoose");
const express = require("express");

require("dotenv").config();
const app = express();

const cors = require("cors");
const routes = require("./routes/ToDoRoutes");

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(5000, () => {
  console.log("App listening on port 5000!");
});
