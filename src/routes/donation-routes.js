const express = require('express');
const DonoController = require('../controllers/donationController');
// donoControl
const validateRequestBody = require('../middlewares/validateRequestBody');
// auth and error handling
const restrict = require('../middlewares/auth_restrict');
const { catchErrors } = require('../middlewares/errorHandlers');

// create routes
const router = express.Router();
// find donos by projectID
router.get('/projects/:projectID', catchErrors(DonoController.findByProjectID));

router.use(restrict());
// donate
router.post(
	'/',
	validateRequestBody(['donationAmount', 'projectID', 'userID']),
	catchErrors(DonoController.addDonation)
);
// find donos by userID
router.get('/users/:userID', catchErrors(DonoController.findByUserID));
// find donos by donoID
router.get('/:id', catchErrors(DonoController.findByID));

// export routes
module.exports = router;
