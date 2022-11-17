const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: process.env.POST_ENDPOINT, // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: { [`^/api/user/posts`]: '', }
}

router.get("/posts",createProxyMiddleware(options) )






module.exports = router