import pokemonModel from "./pokemonSchema.js";

// Function to get all Pokemon
export const getPokemons = (filter, projection) => {
  return pokemonModel.find(filter, projection);
};

// Function to get Pokemon by name
export const getPokemonByName = (name) => {
  return pokemonModel.findOne({ name: name });
};

// Function to get Pokemon by search
export const getPokemonBySearch = (search) => {
  return pokemonModel.find({ name: { $regex: search, $options: "i" } });
};

// Function to create Pokemon
export const createPokemon = (pokemonData) => {
  return pokemonModel(pokemonData).save;
};
