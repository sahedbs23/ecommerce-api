import express from 'express';

import { findProducts, findProduct } from '../controller/product.controller';

const router = express.Router();

router.get('/', findProducts);

router.get('/:productId', findProduct);

export default router;
