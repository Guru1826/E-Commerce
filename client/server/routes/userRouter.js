const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth');
const router = require('express').Router();

console.log("Registering user routes");

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/logout', userCtrl.logout);
router.get('/refresh_token', userCtrl.refreshtoken);
router.get('/infor', auth, userCtrl.getUser);

console.log("User routes registered");

module.exports = router;
