import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    english: { type: String, required: true },
    japanese: String,
    chinese: String,
    french: String,
  },
  type: {
    type: [String],
    required: true,
  },
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    "Sp. Attack": Number,
    "Sp. Defense": Number,
    Speed: Number,
  },
  species: String,
  description: String,
  evolution: {
    prev: {
      type: [String], // Example: ["1", "Level 16"]
      default: undefined,
    },
    next: {
      type: [[String]], // Example: [["3", "Level 32"]]
      default: undefined,
    },
  },
  profile: {
    height: String,
    weight: String,
    egg: [String],
    ability: [[String]], // [["Overgrow", "false"], ["Chlorophyll", "true"]]
    gender: String,
  },
  image: {
    sprite: String,
    thumbnail: String,
    hires: String,
  },
});

export default mongoose.model("Pokemon", PokemonSchema);
