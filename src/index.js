import { app } from "./app.js";
import connectDB from "./db/index.js";
import dontenv from "dotenv";

dontenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log();
    });

    app.on((error) => {
      console.log("Error: ", error);
    });
    throw error;
  })
  .catch((error) => {
    console.log("Error in connection with DB: ", error);
  });
