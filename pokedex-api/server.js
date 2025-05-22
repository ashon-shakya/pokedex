const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Pokedex API! Get Pokemon Details" });
});

app.get("/pokemon/:name", (req, res) => {
  const pokemonName = req.params.name;
  // Simulate fetching Pokemon data
  const pokemonData = {
    name: pokemonName,
    type: "Fire",
    abilities: ["Flame Body", "Flash Fire"],
  };
  res.json(pokemonData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
