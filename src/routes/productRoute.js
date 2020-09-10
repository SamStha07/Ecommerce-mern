const express = require('express');
const multer = require('multer');
const path = require('path');
const shortid = require('shortid');

const { createProduct } = require('../controllers/productController');
const { adminMiddleware, requireSignIn } = require('../middlewares/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  '/create',
  requireSignIn,
  adminMiddleware,
  upload.array('productImages'),
  createProduct,
);

module.exports = router;