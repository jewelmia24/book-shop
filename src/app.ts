import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/products/product.router';
const app: Application = express();

app.use(express.json());

app.use(cors());

app.use('/api/products', productRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('hello book-shop');
});

export default app;
