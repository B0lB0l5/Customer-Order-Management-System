import moment from "moment";
import dbconnection from "../../db/connection.js";

const connection = dbconnection();

/**
 * Creates a new customer order.
 * The order includes customer ID, order date, and ordered items. The total amount is calculated based on product prices and quantities.
 *
 * @param {object} req - The HTTP request object, containing order details (customer_id, order_items) in req.body.
 * @param {object} res - The HTTP response object, used to return status and messages.
 */
const create = (req, res) => {
  // Destructure customer ID and order items from the request body.
    const { customer_id, order_items } = req.body;
    // Format the current date and time.
    const order_date = moment().format('YYYY-MM-DD HH:mm:ss'); 

    // Extract product IDs from the order items array.
    const productIds = order_items.map(item => item.product_id);

    // Return an error if no products are in the order.
    if (productIds.length == 0) 
      return res.status(400).json({ message: "No products in order" });

    // SQL query to retrieve the unit prices of the ordered products.
    const sqlGetPrices = `SELECT id, unit_price FROM products WHERE id IN (${productIds.join(',')})`;

    // Create a mapping of product IDs to their prices.
    connection.query(sqlGetPrices, (err, productPrices) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });
  
      const priceMap = {};
      productPrices.forEach(product => {
        priceMap[product.id] = product.unit_price;
      });
      // Calculate the total order amount by summing the price of each product multiplied by its quantity.
      const total_amount = order_items.reduce((sum, item) => {
        return sum + (item.quantity * priceMap[item.product_id]);
      }, 0);

      // Prepare the order data.
      const orderData = { customer_id, order_date, total_amount };

      // SQL query to insert the order into the 'orders' table.
      const sqlOrder = "INSERT INTO orders SET ?";
  
      connection.query(sqlOrder, orderData, (err, result) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
  
        const orderId = result.insertId;
        const sqlOrderItems = "INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES ?";
        const values = order_items.map((item) => [
          orderId,
          item.product_id,
          item.quantity,
          priceMap[item.product_id],
        ]);

        // Insert order items associated with the order into the 'order_items' table.
        connection.query(sqlOrderItems, [values], (err, result) => {
          if (err)
            return res.status(500).json({ message: "Database error", error: err });
  
          res.status(201).json({ message: "Order created successfully", orderId });
        });
      });
    });
};

/**
 * Retrieves the average value of all orders.
 * 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object, used to return the average order value.
 */
const average_order = (req, res) => {
  // SQL query to calculate average order value.
  const sql = "SELECT AVG(total_amount) AS average_order_value FROM orders";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

/**
 * Retrieves all customers who have not placed any orders.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object, used to return the list of customers with no orders.
 */
const customers_no_order = (req, res) => {
  // SQL query to find customers without orders.
  const sql = `
        SELECT * FROM customers 
        WHERE id NOT IN (SELECT customer_id FROM orders)
    `;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

/**
 * Retrieves the customer who has purchased the highest number of items.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object, used to return the top customer.
 */
const top_customer_items = (req, res) => {
  // SQL query to find the customer with the highest number of purchased items.
  const sql = `
        SELECT customer_id, SUM(order_items.quantity) AS total_items
        FROM orders
        JOIN order_items ON orders.id = order_items.order_id
        GROUP BY customer_id
        ORDER BY total_items DESC
        LIMIT 1
    `;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

/**
 * Retrieves the top 10 customers who have spent the most.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object, used to return the list of top spending customers.
 */
const top_customers_spending = (req, res) => {
  // SQL query to find the top 10 customers by spending.
  const sql = `
        SELECT customer_id, SUM(total_amount) AS total_spent
        FROM orders
        GROUP BY customer_id
        ORDER BY total_spent DESC
        LIMIT 10
    `;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

/**
 * Retrieves customers who have placed 5 or more orders.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object, used to return the list of customers.
 */
const customers_5_orders = (req, res) => {
  // SQL query to find customers with 5 or more orders.
  const sql = `
        SELECT customer_id, COUNT(*) AS order_count
        FROM orders
        GROUP BY customer_id
        HAVING order_count >= 5
    `;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

/**
 * Calculates the percentage of customers who have placed more than one order.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object, used to return the percentage of repeat customers.
 */
const customers_multiple_orders = (req, res) => {
  // SQL query to calculate the percentage of customers with multiple orders.
  const sql = `
        SELECT 
            (COUNT(DISTINCT CASE WHEN order_count > 1 THEN customer_id END) / COUNT(DISTINCT customer_id)) * 100 
            AS percentage_customers
        FROM (
            SELECT customer_id, COUNT(*) AS order_count
            FROM orders
            GROUP BY customer_id
        ) AS customer_orders
    `;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

/**
 * Retrieves the customer who placed the earliest order.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object, used to return the earliest ordering customer.
 */
const earliest_order_customer = (req, res) => {
  // SQL query to find the customer with the earliest order date.
  const sql = `
        SELECT customer_id, MIN(order_date) AS earliest_order_date
        FROM orders
        GROUP BY customer_id
        ORDER BY earliest_order_date
        LIMIT 1
    `;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

const orderControllers = {
  create,
  average_order,
  customers_no_order,
  top_customer_items,
  top_customers_spending,
  customers_5_orders,
  customers_multiple_orders,
  earliest_order_customer,
};

export default orderControllers;
