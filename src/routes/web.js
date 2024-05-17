const express = require('express')
const { getHomepage, getABC, getHaianhem } = require('../controllers/homeController')
const router = express.Router();

// router.Method('/route', handler)

router.get("/", getHomepage);
router.get('/abc', getABC)
router.get("/haianhem", getHaianhem);

module.exports = router 