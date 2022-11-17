const express = require('express');
const router = express.Router();
//config
const { createProxyMiddleware } = require('http-proxy-middleware');


const options = {
  target: process.env.GITHUB_GRAPHQL_ENDPOINT, // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: { [`^/api/user/profile`]: '', },
  headers: { "Content-Type": "application/graphql",
  Authorization: `bearer ${process.env.GITHUB_GRAPHQL_KEY}`,
  }
}


router.post("/profile",createProxyMiddleware(options) )






module.exports = router