import { IProduct } from './product.interface';
import Product from './product.model';
import { FilterQuery } from 'mongoose';

//create product
const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};
// get all products and search

const getAllProduct = async (query: FilterQuery<IProduct>) => {
  const result = await Product.find(query);
  return result;
};

//get single product
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update product

const updateProduct = async (id: string, payload: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// delete product

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
