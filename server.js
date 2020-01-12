const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

// mongoose.connect(process.env.MONGODB_URI || "mongodb://user3:password3@ds261648.mlab.com:61648/heroku_lvbx8gh4", {useNewUrlParser: true});


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";


mongoose.connect(MONGODB_URI, {
useUnifiedTopology: true,
useNewUrlParser: true
});





// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
