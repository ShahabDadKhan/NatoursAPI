const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// 1) Middlewares
app.use(morgan("dev"));
app.use(express.json());

// 2) Route Handlers

// Users

// 3) Routes
// const userRouter = express.Router();
app.use("/api/v1/tours", tourRouter); // This is called the mounting of the router,
app.use("/api/v1/users", userRouter); // i.e mounting a router(userRouter) on a route(/api/v1/users)

module.exports = app;
