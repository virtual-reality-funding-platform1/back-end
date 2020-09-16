require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// import local routes
const UserRouter = require('./routes/users-routes');
// set server up
const server = express();
// use 3rd party middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

// use custom routes
server.use('/users', UserRouter);

// generic welcome
server.use('/', (_, res, __) => {
	res.json({ message: 'Welcome to How To Lambda-XYZ' });
});

// error handling
server.use((err, _, res, __) => {
	console.log('FROM app.js', err);
	res.status(500).json({ message: 'From App: Something Went Wrong' });
});

// export to prevent testing errors
module.exports = server;
