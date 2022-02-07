const errorHandler = (err, req, res, next) => {
  if (err.status === 400) {
    return res.status(400).json({
      success: false,
      msg: `bad request please try again ${err.message}`,
    });
  }
  res
    .status(500)
    .json({ success: false, msg: "internal server error please try again" });
};

module.exports = errorHandler;
