const express = require('express');
const { getCart, addItemToCart, removeItemFromCart } = require('../controllers/cartController');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getCart);
router.post('/', auth, addItemToCart);
router.delete('/:productId', auth, removeItemFromCart);

module.exports = router;
