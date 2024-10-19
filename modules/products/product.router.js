import { Router } from "express";
import { add, items_sold, revenue_category } from "./product.controller.js";

const productRouter = Router();

/**
 * Route to add a new product to the 'products' table.
 * Invokes the 'add' method from the product controller to process the product addition request.
 */
productRouter.post("/add", add);

/**
 * Route to retrieve total revenue by category.
 * Invokes the 'revenue_category' method from the product controller to calculate and return revenue per product category.
 */
productRouter.get("/revenue_category", revenue_category)

/**
 * Route to retrieve the total number of items sold for each product.
 * Invokes the 'items_sold' method from the product controller to calculate and return the total quantity sold per product.
 */
productRouter.get("/items_sold", items_sold)

export default productRouter;
