require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// import local routes
const UserRouter = require("./routes/users-routes");

// set server up
const server = express();

// use 3rd party middlewares
server.use(helmet());
server.use(cors());
server.use(express.json());

// use custom routes
server.use("/users", UserRouter);

// generic welcome
server.get("/", (_, res, __) => {
    res.status(200).json({ message: "Welcome to How To Lambda-XYZ" });
});

// error handling
server.use((err, _, res, __) => {
    console.log("FROM app.js", err);
    res.status(500).json({ message: "From App: Something Went Wrong" });
});

server.get("*", (req, res) => {
    res.status(404).json({
        message: "Unknown Path requested.",
    });
});

// export to prevent testing errors
module.exports = server;
