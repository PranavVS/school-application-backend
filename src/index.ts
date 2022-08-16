import { App } from "./app";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
dotenv.config();
const start = async () => {
  if (!process.env.PORT) {
    throw new Error("PORT is Not Defined.");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is Not Defined.");
  }
  await mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true } as ConnectOptions,
    () => console.log("Connected to MongoDB.")
  );
};

start();
App.listen(process.env.PORT, () => {
  console.log(`Node Server Listening at Port ${process.env.PORT}`);
});
