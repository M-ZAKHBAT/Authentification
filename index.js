import { DbConnexion } from "./src/commun/connexiondb.js";
import express from "express";
const port = 3000;
const database = new DbConnexion();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ statut: "UP" });
});

database.generateConnexion().then(() => {
  app.listen(port, () => {
    console.log(`Starting Server : ${port}`);
  });
});
