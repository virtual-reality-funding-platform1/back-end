const express = require('express');
const UserController = require('../controllers/userController');
const validateUserLoginRequest = require('../middlewares/valUserLoginReq');
// custom user middlewares
const createUserRequirements = require('../middlewares/registerUserReqs');
const validateUserEditRequirements = require('../middlewares/valUserEditReqs');
const restrict = require('../middlewares/auth_restrict');

const router = express.Router();

router.post('/', createUserRequirements, UserController.registerUser);
router.get('/:id', UserController.getUser);
router.post(
	'/auth/login',
	validateUserLoginRequest(),
	UserController.loginUser
);
// must be signed in to edit or delete
// router.use(restrict);
router.put(
	'/:id',
	restrict(),
	validateUserEditRequirements,
	UserController.editUser
);
router.delete('/:id', restrict(), UserController.deleteUser);

module.exports = router;
