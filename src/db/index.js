import mongoose from "mongoose";
import { DB_NAME } from "../constats.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connnected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error in connection DB", error);
    process.exit(1);
  }
};

export default connectDB;
