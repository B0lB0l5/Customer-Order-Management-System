import express from "express";
import customerRouter from "./modules/customers/customer.router.js";
import productRouter from "./modules/products/product.router.js";
import orderRouter from "./modules/orders/order.router.js";

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

/**
 * Routes for handling customer-related operations.
 * The '/customers' path will forward requests to the customerRouter.
 */
app.use("/customers", customerRouter)

/**
 * Routes for handling product-related operations.
 * The '/products' path will forward requests to the productRouter.
 */
app.use("/products", productRouter)

/**
 * Routes for handling order-related operations.
 * The '/orders' path will forward requests to the orderRouter.
 */
app.use("/orders", orderRouter)

/**
 * 404 handler for any routes not defined above.
 * Returns a 404 error with a 'Not Found' message for unmatched routes.
 */

app.use("*", (req, res) => {
    res.status(404).json({ message: "404 not found" });
});

app.listen(port, () => console.log(`app listening on port ${port}...`));
