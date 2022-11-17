require('dotenv').config();
const profile = require("./routes/github/profile");
const posts = require("./routes/github/posts");


const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const PORT = process.env.PORT || 4000
const HOST = "localhost";

// CORS
app.use(cors());

// Logging
app.use(morgan('dev'));


app.use("/api/user", profile);
app.use("/api/user", posts);




app.listen(PORT, () => {
  console.log(`${HOST} listening on port: ${PORT}`)
});


