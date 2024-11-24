import { Router } from 'express';
import { productController } from './product.controller';

const productRouter = Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getAllProduct);
productRouter.get('/:userId', productController.getSingleProduct);
productRouter.put('/:userId', productController.updateProduct);
productRouter.delete('/:userId', productController.deleteProduct);

export default productRouter;
