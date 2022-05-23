import mongoose from "mongoose";

const { Schema, model } = mongoose;

const MemeSchema = new Schema(
  {
    memeFile: {
      url: String,
      public_id: String,
    },
    memeUser: {
      userId: String,
      email: String,
    },
    memeData: {
      title: String,
      desc: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Memes = new model("memes", MemeSchema);
