import { IOrder } from './order.interface';
import Order from './order.model';
// create order
const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);
  return result;
};

//create revinue

export const calculateRevenue = async (): Promise<number> => {
  const result = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ]);
  return result[0]?.totalRevenue || 0;
};

export const orderService = {
  createOrder,
  calculateRevenue,
};
