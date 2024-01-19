import mongoose, { Mongoose } from "mongoose";

const { Schema } = mongoose;

const recipSchema = new Schema({
  id: mongoose.ObjectId,
  category: String,
  name: String,
  ingredients: [String],
  instructions: [String],
  userId: {
    required: true,
    type: mongoose.ObjectId,
    ref: "User",
  },
  // img: String,
});

export const Recep = mongoose.model("Recep", recipSchema, "Receps");
