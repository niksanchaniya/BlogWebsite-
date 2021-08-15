const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//components
require("./database/db.js");
const Route = require("./routes/route.js");

const app = express();
const port = 5000;


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Route);

app.listen(port, () => {
    console.log(`server is runnig at ${port}`);
});