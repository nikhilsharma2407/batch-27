const router = require("express").Router();
const {signup,login, authMiddleware} = require('../controllers/userController');

router.post('/signup',signup);
router.post('/login',login);
router.get('/login',authMiddleware);
// router.get('/addFriend',addFriend);
// router.get('/removeFriend',removeFriend);

module.exports = router