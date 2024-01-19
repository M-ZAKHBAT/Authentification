import { DbConnexion } from "./src/commun/connexiondb.js";
import express from "express";
import { route as userRouter } from "./src/users/route.js";
import { route as recepRouter } from "./src/receps/route.js";
import { route as authRouter } from "./src/authentification/route.js";
import { auth } from "./src/commun/auth.js";
const port = 3000;
const database = new DbConnexion();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ statut: "UP" });
});

//users
app.use("/users", auth, userRouter); //API PRIVATE
//receps
app.use("/receps", auth, recepRouter); //API PRIVATE
//login
app.use("/auth", authRouter); //API public

database.generateConnexion().then(() => {
  app.listen(port, () => {
    console.log(`Starting Server : ${port}`);
  });
});
