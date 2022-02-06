const express = require("express");
const errorRouter = require("../functions/errorRouter");
const {
  getAllComments,
  getComment,
  addComments,
  updateComments,
  deleteComments,
} = require("../controllers/CommentControllers");

const Route = express.Router();

Route.route("/")
  .get(errorRouter(getAllComments))
  .post(errorRouter(addComments));
Route.route("/:id")
  .get(errorRouter(getComment))
  .delete(errorRouter(deleteComments))
  .patch(errorRouter(updateComments));

module.exports = Route;
