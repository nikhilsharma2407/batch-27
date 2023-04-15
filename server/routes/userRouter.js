const router = require("express").Router();
const { signup, login, authMiddleware, loginWithCookie, addFriend, removeFriend, resetPassword, logout } = require('../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/login', authMiddleware, loginWithCookie);
router.patch('/addFriend', authMiddleware, addFriend);
router.patch('/removeFriend', authMiddleware, removeFriend);
router.patch('/reset', resetPassword);
router.get('/logout', logout);

module.exports = router