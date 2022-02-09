require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require('helmet')
const CommentRouter = require("./routers/CommentRouter");
const errorHandler = require("./error/errorHandler");
const db = require("./db");
const app = express();

app.use(helmet())
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", CommentRouter);

// error handling
app.use(errorHandler);

const start = async () => {
  const port = 5000 || process.env.PORT;
  await db(process.env.DB_URL);
  app.listen(port, () => {
    console.log(`you server is up in ${port}`);
  });
};

start();
