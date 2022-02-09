const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    content: { type: String, required: [true, "please provide a body text"] },
    score: { type: Number, default: 0 },
    replays: { type: [mongoose.Types.ObjectId] },
    isReplayFor: {
      type: [mongoose.Types.ObjectId],
    },
    user: {
      image: {
        png: { type: String },
        webp: { type: String },
      },
      username: {
        type: String,
        required: [true, "please provide a userName"],
      },
    },
    isYou: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Comment", CommentSchema);
