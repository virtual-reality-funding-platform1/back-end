const express = require('express');
const ProjController = require('../controllers/projectController');
const validateCreateProject = require('../middlewares/valProjCreateReq');
const restrict = require('../middlewares/auth_restrict');

const router = express.Router();

router.get('/', ProjController.fetchAll);
router.get('/users/:userID', ProjController.fetchByUserID);

// need to be signed in as user
router.post(
	'/',
	restrict(),
	validateCreateProject(),
	ProjController.createProject
);

module.exports = router;
