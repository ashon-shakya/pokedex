const config = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/pokedex-db",
};

export default config;
