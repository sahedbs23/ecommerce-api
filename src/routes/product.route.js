import express from 'express';

import {
  findProducts,
  findProduct,
  saveProduct,
  updateProduct,
  deleteProduct
} from '../controller/product.controller';

const router = express.Router();

router.get('/', findProducts);

router.post('/', saveProduct);

router.get('/:productId', findProduct);

router.put('/:productId', updateProduct);

router.delete('/:productId', deleteProduct);

export default router;
