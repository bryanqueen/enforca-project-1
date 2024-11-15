const express = require('express');
const router = express.Router();
const login = require('../../controllers/auth/Login');
const forgotPassword = require('../../controllers/auth/Forgot-password');
const verifyOtp = require('../../controllers/auth/Verify-Otp')

router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/verify', verifyOtp);

module.exports = router;
