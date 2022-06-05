const express = require("express");
const router = require("./routes/index");
const mongoose = require("mongoose");
const app = express();

const port = 4000;
app.use(express.json());
app.use("/", router);

app.listen(port, async () => {
  try {
    await mongoose.connect("<YOUR_MONGO_DB_URI_HERE>");
  } catch (error) {
    console.log(error);
  }
  console.log(`App is Running on PORT ${port}`);
});
