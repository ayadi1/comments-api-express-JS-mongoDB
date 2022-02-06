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
  res.json("ok3");
};

const updateComments = async (req, res) => {
  res.json("ok4");
};

const deleteComments = async (req, res) => {
  res.json("ok5");
};

module.exports = {
  getAllComments,
  getComment,
  addComments,
  updateComments,
  deleteComments,
};
