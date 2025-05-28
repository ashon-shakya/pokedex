import express from "express";
import "dotenv/config";
import config from "./src/config/config.js";
import mongoConnection from "./src/config/mongoConfig.js";
import pokemonRouter from "./src/routes/pokemonRouter.js";

const app = express();
const port = config.port;

app.get("/", (req, res) => {
  res.json({ message: "Pokedex API! Get Pokemon Details" });
});

app.use("/pokemon", pokemonRouter);

mongoConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
