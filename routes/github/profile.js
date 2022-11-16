const express = require('express');
const router = express.Router();

const g = require('graphql-request');
const { GraphQLClient, gql } = g;
const url = 'https://api.github.com/graphql';
const TOKEN = process.env.GITHUB;
const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});


router.post("/profile", async (req, res) => {
  console.log("from github");
  res.send("from github");
  // The query that gets profile information
  // const query = gql`
  // {
  //  user: viewer {
  //   id
  //   name
  //   bio
  //   email
  //   websiteUrl
  //   githubUrl: url
  //   twitterUsername
  //   avatarUrl
  //   biography: repository(name: "ElvinGarcia") {
  //     description: object(expression: "main:README.md") {
  //       ... on Blob {
  //         text
  //       }
  //     }
  //   }
  // }
  // }`;

  // // Make Graphql call
  // const githubRes = await graphQLClient.request(query);
  // // Respond with results
  // res.json(githubRes);

});






module.exports = router