const express = require('express');
const Movie = require('./Movie.json'); 
const cors = require("cors")
const app = express();
const port = 3000;
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/Movie/List', (req, res) => {
  const offset = parseInt(req.query.offset);
  const from = offset;
  const to = from + 12;
  const moviesubset = Movie.slice(from, to);
  return res.json({ movies: moviesubset, count: Movie.length });
});

app.get('/Movie/:id', (req, res) => {
  const id = req.params.id;
  const movie = Movie.find(m => m.id === id);
  if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
  } else {
      res.json(movie);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
