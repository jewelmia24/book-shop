import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service"
import Product from "../products/product.model";

// create order
const createOrder = async (req:Request, res:Response, next : NextFunction)=>{
    try{
        const payload = req.body;

        const product = await Product.findById(payload.product);
        if (!product)throw new Error("Product not found");
            
        if (product.quantity < payload.quantity!) throw new Error('Insufficient stock')


        product.quantity -= payload.quantity;
        if(product.quantity===0){
            product.inStock=false;
        }

        await product.save()


        const result = await orderService.createOrder(payload);
        res.json({
            message: 'Order created successfully',
            success: true,
            data: result,
          });
        
    }catch(error){
        next(error)
    }
}


export const orderController = {
    createOrder
}