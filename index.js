const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Products_route = require("./src/Routes/Routes");
const db = require("./src/db/db");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

db.sequelize.sync();

app.use("/api", Products_route);

app.listen(8000, () => {
  console.log("server is started at port 8000");
});
