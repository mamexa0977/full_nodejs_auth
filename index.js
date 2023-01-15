const express = require("express");
const router = require("./routes/index");
const mongoose = require("mongoose");
const app = express();
const { User } = require("./model/user");

const port = 4000;
app.use(express.json());
app.use("/", function(){

});


app.listen(port, async () => {
  try {
    client = await mongoose.connect("removed my password for safty");
  
  } catch (error) {
    console.log(error);
  }
  console.log(`App is Running on PORT ${port}`);
});
