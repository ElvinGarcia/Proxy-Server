require('dotenv').config();
const profile = require("./routes/github/profile");
const posts = require("./routes/github/posts");
const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const PORT = 4000
const HOST = "localhost";

// CORS
app.use(cors());

// Logging
app.use(morgan('dev'));



// app.use('', (req, res, next) => {
//   if (req.headers.authorization) {
//       next();
//   } else {
//       res.sendStatus(403);
//   }
// });

app.use("/api", profile);
app.use("/api/blog", posts);



app.listen(PORT, () => {
  console.log(`${HOST} listening on port: ${PORT}`)
});


