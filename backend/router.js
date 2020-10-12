const {Router} = require('express');
const router = Router();
const productRouter = require('./routes/productRouter');

router.use('/products', productRouter);

module.exports = router;