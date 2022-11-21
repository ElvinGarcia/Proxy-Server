require('dotenv').config();
const profile = require("./routes/github/profile");
const posts = require("./routes/github/posts");

const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const rateLimter = require("express-rate-limit");
const apicache = require("apicache");
const cache = apicache.middleware;



const PORT = process.env.PORT || 4000
const HOST = "localhost";

const rateLimterOptions = {
  windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}

const corsOptions = {
  origin: process.env.CLIENT ,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// API caching commented out do to a bug when using CORS and apicache middleware where headers are blocked
// https://github.com/kwhitley/apicache/issues/187
// app.use(cache('1 minutes'));

// Rate Limits
app.use(rateLimter(rateLimterOptions));
app.set('trust proxy', 1)

// CORS
app.use(cors(corsOptions));

// Logging
app.use(morgan('dev'));

// Routes
app.use("/api/user", profile);
app.use("/api/user", posts);




app.listen(PORT, () => {
  console.log(`${HOST} listening on port: ${PORT}`)
});


