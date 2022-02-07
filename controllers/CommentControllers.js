const CommentModule = require("../modules/CommentModule");
const getAllComments = async (req, res) => {
  const allComment = await CommentModule.find({});
  if (!allComment) {
    throw res.json({ success: false });
  }
  res.status(200).json({ success: true, data: allComment });
};

const getComment = async (req, res) => {
  const comment = await CommentModule.findById(req.params.id);
  if (!comment) {
    throw res.json({ success: false });
  }
  res.status(200).json({ success: true, data: comment });
};

const addComments = async (req, res) => {
  const { body } = req.body;
  if (!body) {
    throw new Error("please provide a body text").status(400);
  }
  await CommentModule.create({ body });
  res.status(201).json({ success: true });
};

const updateComments = async (req, res) => {
  const { id: commentID } = req.params;
  const { body, score } = req.body;
  const newData = { body };
  if (score) {
    // check if score a number start
    if (isNaN(+score)) {
      const myError = new Error("bad request please provide a valid for score");
      myError.status = 400;
      throw myError;
    }
    // check if score a number end
    const oldCommentScore = await CommentModule.findById(commentID);
    newData.score = +score + oldCommentScore.score;
  }
  const updatedComment = await CommentModule.findByIdAndUpdate(
    commentID,
    newData,
    { new: true, runValidators: true }
  );
  res.status(200).json({ success: true, data: updatedComment });
};

const deleteComments = async (req, res) => {
  await CommentModule.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true });
};

module.exports = {
  getAllComments,
  getComment,
  addComments,
  updateComments,
  deleteComments,
};
