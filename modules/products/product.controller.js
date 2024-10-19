import dbconnection from "../../db/connection.js";

const connection = dbconnection();

/**
 * Function to add a new product to the 'products' table.
 * It expects 'product_name', 'category', and 'unit_price' in the request body.
 * If any field is missing, it responds with a 400 error indicating that all fields are required.
 */
const add = (req, res) => {
    const { product_name, category, unit_price } = req.body;
    // Check if all required fields are present
    if (!product_name || !category || !unit_price) 
        return res.status(400).json({ message: 'All fields are required' });
     // Create an object to store the product data
    const productData = { product_name, category, unit_price }
     // Insert new product data into the 'products' table
    connection.query('insert into products set ?', productData, (err, result) => {
        if (err)  
            return res.status(500).json({ message: 'Database error', error: err });
        else
        res.status(201).json({ message: 'Product added successfully', result });
    });
}

/**
 * Function to calculate the total revenue by category.
 * It joins the 'products' and 'order_items' tables to compute revenue (quantity * unit_price) for each category.
 */
const revenue_category = (req, res) => {
    // Execute the SQL query to get total revenue per category
    const sql = `
        SELECT category, SUM(order_items.quantity * order_items.unit_price) AS total_revenue
        FROM products
        JOIN order_items ON products.id = order_items.product_id
        GROUP BY category
    `;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

/**
 * Function to calculate the total number of items sold for each product.
 * It joins the 'products' and 'order_items' tables to calculate the total quantity sold for each product.
 */
const items_sold = (req, res) => {
    // Execute the SQL query to get total sold items per product
    const sql = `
    SELECT product_name, SUM(order_items.quantity) AS total_sold
    FROM products
    JOIN order_items ON products.id = order_items.product_id
    GROUP BY product_name`;
connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
});
}

export {add, revenue_category, items_sold}
