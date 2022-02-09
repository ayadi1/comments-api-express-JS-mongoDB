require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const CommentRouter = require("./routers/CommentRouter");
const errorHandler = require("./error/errorHandler");
const db = require("./db");
const app = express();
app.set('trust proxy', 1)
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors());
app.use(morgan("dev"));

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
