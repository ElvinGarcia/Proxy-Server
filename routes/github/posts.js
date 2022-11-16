const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: 'https://api.github.com/repositories/95937718/contents/technical_blog/_posts', // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: { [`^/api/blog/posts`]: '', }
}

router.get("/posts",createProxyMiddleware(options) )






module.exports = router