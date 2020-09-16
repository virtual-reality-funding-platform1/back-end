const express = require('express');
const userController = require('../controllers/userController');
const UserController = require('../controllers/userController');
// custom user middlewares
const createUserRequirements = require('../middlewares/registerUserReqs');
const validateUserEditRequirements = require('../middlewares/valUserEditReqs');

const router = express.Router();

router.post('/', createUserRequirements, UserController.registerUser);
router.get('/:id', UserController.getUser);
router.put('/:id', validateUserEditRequirements, userController.editUser);

module.exports = router;
