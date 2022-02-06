const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    body: { type: String, required: [true, "please provide a body text"] },
    score: { type: Number, default: 0 },
    replays: { type: [mongoose.Types.ObjectId] },
  },
  { timestamps: true }
);
 module.exports = mongoose.model('Comment',CommentSchema)