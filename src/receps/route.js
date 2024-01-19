import express from "express";
import { RecepController } from "./controllers/recep.controller.js";

export const route = express();
route.use(express.json());

const recepController = new RecepController();

//GetAll
route.get("/", async (req, res) => {
  try {
    const {page,limit, filter}= req.query;

    const result = await recepController.getAll(page, limit, filter);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GetOne
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await recepController.getOne(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//AdOne
route.post("/", async (req, res) => {
  try {
    const { body } = req;
    console.log({ body });
    const result = await recepController.Add(body);
    if (result) res.status(201).json(result);
    res.status(404).json();
  } catch (err) {
    console.error(res.status(500).json());
  }
});

//Delete
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await recepController.delete(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const result = await recepController.update(id, body);
    if (result) res.status(200).json(result);
    res.status(404).json();
  } catch (error) {
    console.error(err);
    res.status(500).json();
  }
});
