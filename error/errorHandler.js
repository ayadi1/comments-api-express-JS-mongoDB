const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err.message === "bad-req") {
    return res
      .status(400)
      .json({ success: false, msg: "bad request please try again" });
  }
  res.status(500).json({ success: false, msg: "Internal Server Error" });
};

module.exports = errorHandler;
