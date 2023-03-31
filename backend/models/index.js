//DEPENDENCIES
const mongoose = require("mongoose")
const { DATABASE_URL } = process.env

//DB CONNECTION
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// ERROR/ SUCCESS HANDLING
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));
  
//requiring our Schema
module.exports = {
  People: require("./People.js"),
};
