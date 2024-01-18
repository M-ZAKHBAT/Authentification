import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { url } = process.env;

export class DbConnexion {
  constructor() {
    this.dbConnexion = null;
  }

  generateConnexion = async () => {
    try {
      this.dbConnexion = await mongoose.connect(url);
      console.log("DataBase Connected");
    } catch (err) {
      console.error("error");
      this.dbConnexion = null;
    }
  };

  getConnexion() {
    if (!this.dbConnexion) this.generateConnexion();
    return this.dbConnexion;
  }
}
