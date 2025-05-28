import pokemonModel from "./pokemonSchema.js";

// Function to get all Pokemon
export const getPokemons = ({ filter, projection, limit = 10 }) => {
  return pokemonModel.find(filter, projection).limit(limit);
};

// Function to get Pokemon by name
export const getPokemonByName = (name) => {
  return pokemonModel.findOne({ "name.english": name });
};

// Function to create Pokemon
export const createPokemon = (pokemonData) => {
  return pokemonModel(pokemonData).save;
};
