const User = require('../models/user-model');
const createToken = require('../utils/createToken');

const registerUser = async (req, res, next) => {
	try {
		const user = await User.insert(req.body);
		const token = await createToken(user);
		delete user.password;
		//
		return res.status(201).json({ user, token });
	} catch (err) {
		console.log('register user error', err);
		next(err);
	}
};

const loginUser = async (req, res, next) => {
	try {
		const token = await createToken(req.user);
		delete req.user.password;
		//
		return res.status(200).json({ user: req.user, token });
	} catch (err) {
		console.log('register user error', err);
		next(err);
	}
};

const getUser = async (req, res) => {
	const user = await User.findById(req.params.id);
	return res.status(200).json(user);
};

const editUser = async (req, res, next) => {
	try {
		const edit = {
			username: req.body.username,
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			avatarUrl: req.body.avatarUrl,
		};
		const user = await User.update(edit, req.params.id);
		delete user.password;
		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Server is malfunctioning' });
	}
};

module.exports = {
	registerUser,
	loginUser,
	getUser,
	editUser,
};
