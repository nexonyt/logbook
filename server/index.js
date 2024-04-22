const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log("Not connected", err));

const app = express();
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/", require("./routes/authRoutes"));
