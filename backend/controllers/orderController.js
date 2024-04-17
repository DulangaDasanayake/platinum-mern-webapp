import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc   Create new order
// @route  POST/api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// @desc   Get logged in user orders
// @route  GET/api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc   Get order by ID
// @route  GET/api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @desc   Update order to paid
// @route  PUT/api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

// @desc   Create new order to delivered
// @route  PUT/api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

// @desc   Get all orders
// @route  Get/api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
