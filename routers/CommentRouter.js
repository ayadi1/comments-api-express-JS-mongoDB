const express = require("express");
const {
  getAllComments,
  getComment,
  addComments,
  updateComments,
  deleteComments,
} = require("../controllers/CommentControllers");

const Route = express.Router();

Route.route("/").get(getAllComments).post(addComments);
Route.route("/:id")
  .get(getComment)
  .delete(deleteComments)
  .patch(updateComments);

module.exports = Route;
