import { Router } from "express";
import orderControllers from "./order.controller.js"; 

const orderRouter = Router();


/**
 * Route to create a new order.
 * Invokes the 'create' method from the order controller to process the order creation request.
 */
orderRouter.post("/create", orderControllers.create);

/**
 * Route to get the average order value across all orders.
 * Invokes the 'average_order' method from the order controller.
 */
orderRouter.get("/average-order", orderControllers.average_order);

/**
 * Route to retrieve customers who have not placed any orders.
 * Invokes the 'customers_no_order' method from the order controller.
 */
orderRouter.get("/customers-no-orders", orderControllers.customers_no_order);

/**
 * Route to get the customer who has purchased the highest number of items.
 * Invokes the 'top_customer_items' method from the order controller.
 */
orderRouter.get("/top-customer-items", orderControllers.top_customer_items);

/**
 * Route to retrieve the top 10 customers by spending.
 * Invokes the 'top_customers_spending' method from the order controller.
 */
orderRouter.get("/top-customers-spending", orderControllers.top_customers_spending);

/**
 * Route to retrieve customers who have placed at least 5 orders.
 * Invokes the 'customers_5_orders' method from the order controller.
 */
orderRouter.get("/customers-5-orders", orderControllers.customers_5_orders);

/**
 * Route to calculate the percentage of customers who have placed multiple orders.
 * Invokes the 'customers_multiple_orders' method from the order controller.
 */
orderRouter.get("/customers-multiple-orders", orderControllers.customers_multiple_orders);

/**
 * Route to retrieve the customer who placed the earliest order.
 * Invokes the 'earliest_order_customer' method from the order controller.
 */
orderRouter.get("/earliest-order-customer", orderControllers.earliest_order_customer);

export default orderRouter;
