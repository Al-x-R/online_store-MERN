const {Router} = require('express');
const router = Router();
const productRouter = require('./routes/productRouter');
const {errorHandler, notFound} = require('./middleware/errorMiddleware');

router.use('/products', productRouter);
router.use(notFound);
router.use(errorHandler);

module.exports = router;