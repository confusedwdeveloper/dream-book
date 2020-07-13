import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DreamSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  text: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Dream = mongoose.model("dream", DreamSchema);
export default Dream;
