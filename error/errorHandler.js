const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ success: false, msg: "Internal Server Error" });
};

module.exports = errorHandler;
