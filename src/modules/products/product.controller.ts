import { Request, Response } from 'express';
import { productService } from './product.service';
// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await productService.createProduct(payload);
    res.json({
      message: 'Book created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Validation failed',
      success: false,
      error,
    });
  }
};
// get all products and search

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    const query = searchTerm
      ? {
          $or: [
            { title: searchTerm },
            { author: searchTerm },
            { category: searchTerm },
          ],
        }
      : {};

    const result = await productService.getAllProduct(query);

    res.json({
      message: 'Book retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Error retrieving book',
      success: false,
      error,
    });
  }
};

// get single product

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await productService.getSingleProduct(userId);

    res
      .status(200)
      .json({
        message: 'Book retrieved successfully',
        success: true,
        data: result,
      });
  } catch (error) {
    res.json({
      message: 'Error retrieving book',
      success: false,
      error,
    });
  }
};

// update product

const updateProduct = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const payload = req.body;
    const result = await productService.updateProduct(userId, payload);
    res.json({
      message: 'Book updated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Error updating book',
      success: false,
      error,
    });
  }
};

// delete product

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    await productService.deleteProduct(userId);
    res.json({
      message: 'Book deleted successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    res.json({
      message: 'Error book deleting',
      success: false,
      error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
