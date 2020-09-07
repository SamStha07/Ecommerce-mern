const express = require('express');
const {
  signup,
  login,
  requireSignIn,
} = require('../controllers/authController.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/profile', requireSignIn, (req, res) => {
  res.status(200).json({ user: 'profile' });
});

module.exports = router;
