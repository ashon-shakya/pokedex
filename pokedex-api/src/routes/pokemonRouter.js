import express from "express";
import { getPokemons } from "../models/pokemon/pokemonModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const search = req?.query?.search || "";
  const limit = req?.query?.limit;

  let filter = {};

  if (search) {
    filter = {
      "name.english": { $regex: search, $options: "i" },
    };
  }
  const pokemons = await getPokemons({ filter, limit });

  return res.json({ status: true, message: "Pokemons Listed!", pokemons });
});

export default router;
