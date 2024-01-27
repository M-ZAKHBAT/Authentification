import express from "express";
import { AuthController } from "./controllers/auth.controller.js";
export const route = express();
route.use(express.json());
const authController = new AuthController();

//AddOne
route.post("/login", async (req, res) => {
  try {
    const { body } = req;
    // console.log({ body });
    const result = await authController.login(body);
    if (result) res.status(200).json(result);
    else res.status(404).json({ msg: "erreur" });
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});

//RegisterOne
route.post("/register", async (req, res) => {
  try {
    const { body } = req;
    // console.log({ body });
    const result = await authController.register(body);
    if (result) res.status(200).json(result);
    else res.status(404).json({ msg: "erreur" });
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});
//resetPassword

route.put("/reset", async (req, res) => {
  try {
    const { body } = req;
    // console.log({ body });
    const result = await authController.resetPassword(body);
    if (result) res.status(200).json(result);
    else res.status(404).json({ msg: "erreur" });
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});
