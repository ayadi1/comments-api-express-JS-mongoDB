const CommentModule = require("../modules/CommentModule");
const validateObjectID = require("../functions/validateObjectID");
const getAllComments = async (req, res) => {
  const allComment = await CommentModule.find({});
  if (!allComment) {
    throw res.json({ success: false });
  }
  res.status(200).json({ success: true, data: allComment });
};

const getComment = async (req, res) => {
  validateObjectID(req.params.id);
  const comment = await CommentModule.findById(req.params.id);
  if (!comment) {
    throw res.json({ success: false });
  }
  res.status(200).json({ success: true, data: comment });
};

const addComments = async (req, res) => {
  const { body, isReplayFor } = req.body;
  const commentData = {};
  // check if body text exists
  if (!body) {
    const myError = new Error("please provide a body text");
    myError.status = 400;
    throw myError;
  }
  commentData.body = body;

  // check if id isReplayFor_id valid
  if (!isReplayFor) {
    await CommentModule.create({ ...commentData });
    return res.status(201).json({ success: true });
  } else {
    validateObjectID(isReplayFor);

    // check if comment exists and add to replays list
    const mainComment = await CommentModule.findById(isReplayFor);

    if (!mainComment) {
      const myError = new Error("please provide a body text");
      myError.status = 400;
      throw myError;
    }
    commentData.isReplayFor = isReplayFor;

    const newComment = await CommentModule.create({ ...commentData });
    console.log(mainComment._id);
    await CommentModule.findByIdAndUpdate(isReplayFor, {
      replays: [...mainComment.replays, newComment._id],
    });
    return res.status(201).json({ success: true });
  }
};

const updateComments = async (req, res) => {
  validateObjectID(req.params.id);
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
  validateObjectID(req.params.id);
  const deletedComment = await CommentModule.findByIdAndDelete(req.params.id);
  if (!deletedComment) {
    const myError = new Error("bad request please try again");
    myError.status = 400;
    throw myError;
  }
  res.status(200).json({ success: true });
};

module.exports = {
  getAllComments,
  getComment,
  addComments,
  updateComments,
  deleteComments,
};
