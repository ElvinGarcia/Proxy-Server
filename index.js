const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;


app.get('/', (req, res) => {
  res.send(

     `{
      baseURL: "https://api.github.com/graphql",
      username: "elvingarcia",
      headers: {
        "Content-Type": "application/graphql",
        Authorization: "bearer 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",
      }`

  )
})

app.listen(port,() => {
  console.log(`listening on port: ${port}`)
});


