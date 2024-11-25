import express, { Application, NextFunction, request, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/products/product.router';
import orderRouter from './modules/orders/order.route';
const app: Application = express();

app.use(express.json());

app.use(cors());

app.use('/api/products', productRouter);
app.use('/api/orders',orderRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('hello book-shop');
});

app.all('*',(req:Request, res:Response)=>{
  res.status(400).json({
    success:false,
    message: "Not Found"
  })
})


// error handler

app.use((error: any,req: Request, res: Response, next: NextFunction) => {
  if(error){
    res.status(500).json({
      message: error.message,
      success: false,
      error: error,
      stack: error.stack,
    });
  }
  
})

export default app;
