import express, { Express } from 'express';
import { addProducts, getProducts } from '../controllers/productController';

const router: Express = express();

router.route('/').post(getProducts);
router.route('/add').post(addProducts);

export = router;
