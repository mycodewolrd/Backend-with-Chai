require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/login', (req, res) => {
    res.send("<h1>You are logged in!</h1>");
})

app.get("/youtube", (req, res) => {
  res.send(
    "https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2"
  );
});

app.listen(process.env.PORT, () =>
  console.log(`Server running at http://localhost:${process.env.PORT}`)
);