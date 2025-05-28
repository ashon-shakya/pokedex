import mongoose from "mongoose";
import config from "./config.js";

const mongoConnection = () => {
  return mongoose.connect(config.mongoUrl);
};

export default mongoConnection;
