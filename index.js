import { DbConnexion } from "./src/commun/connexiondb.js";
import express from "express";
import { route as userRouter } from "./src/users/route.js";
const port = 3000;
const database = new DbConnexion();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ statut: "UP" });
});

app.use("/users", userRouter);

database.generateConnexion().then(() => {
  app.listen(port, () => {
    console.log(`Starting Server : ${port}`);
  });
});
