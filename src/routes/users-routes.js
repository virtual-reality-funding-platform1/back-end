const express = require('express');
const UserController = require('../controllers/userController');
const validateUserLoginRequest = require('../middlewares/valUserLoginReq');
// custom user middlewares
const createUserRequirements = require('../middlewares/registerUserReqs');
const validateUserEditRequirements = require('../middlewares/valUserEditReqs');
const restrict = require('../middlewares/auth_restrict');
const { catchErrors } = require('../middlewares/errorHandlers');

const router = express.Router();

router.post(
	'/',
	createUserRequirements,
	catchErrors(UserController.registerUser)
);
router.get('/:id', catchErrors(UserController.getUser));
router.post(
	'/auth/login',
	validateUserLoginRequest(),
	catchErrors(UserController.loginUser)
);
// must be signed in to edit or delete
// router.use(restrict);
router.put(
	'/:id',
	restrict(),
	validateUserEditRequirements,
	catchErrors(UserController.editUser)
);
router.delete('/:id', restrict(), catchErrors(UserController.deleteUser));

module.exports = router;
