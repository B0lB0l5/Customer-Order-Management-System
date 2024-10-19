import dbconnection from "../../db/connection.js";
import bcrypt from "bcrypt";

const connection = dbconnection();


/**
 * Signup function to register a new customer.
 * It checks if the email already exists in the 'customers' table,
 * hashes the password using bcrypt, and stores the new customer's data.
 *
 * @param {object} req - The HTTP request object, containing the customer's data in req.body.
 * @param {object} res - The HTTP response object, used to return status and messages.
 */
const signup = (req, res) => {
  try {
    // Query to check if the email is already registered in the 'customers' table.
    connection.execute(
      "select email from customers where email = ?",
      [req.body.email],
      (err, results) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Database error", error: err });

        if (results.length != 0)
          return res
            .status(409)
            .json({ message: "email already exist", results });
        // Synchronously hash the password with a salt factor of 10.
        const customerData = { ...req.body, password: bcrypt.hashSync(req.body.password, 10) };
        // Insert the new customer data into the 'customers' table.
        connection.query(
          "insert into customers set ?",
          customerData,
          (err, results) => {
            if (err)
              return res
                .status(500)
                .json({ message: "Database error", error: err });
            // Return a success response if the customer is registered successfully.
            res.status(201).json({ message: "Customer registered", results });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

/**
 * Login function to authenticate an existing customer.
 * It verifies the email, compares the provided password with the hashed one,
 * and upon successful login, retrieves and returns a list of products from the 'products' table.
 *
 * @param {object} req - The HTTP request object, containing the customer's email and password.
 * @param {object} res - The HTTP response object, used to return status, messages, and product data.
 */
const login = (req, res) => {
  // Query to retrieve the email and hashed password from the 'customers' table based on the provided email.
  connection.query(
    `select email, password from customers where email = '${req.body.email}'`,(err, results) => {
      if (err)
        return res.status(500).json({ message: "Database error", error: err });

      if (results.length == 0) 
        return res.status(401).json({ message: "Invalid Password or Email" });
      // Compare the provided password with the stored hashed password.
      const isMatch = bcrypt.compareSync(req.body.password, results[0].password )
      // If the password does not match, return unauthorized error.
      if(!isMatch)
        return res.status(401).json({ message: "Invalid Password or Email" })
      // If the password matches, retrieve the list of products from the 'products' table.
      const sqlGetProducts = 'SELECT product_name, category, unit_price FROM `products`';
      connection.query(sqlGetProducts, (err, products) => {
        if (err) 
          return res.status(500).json({ message: "Database error", error: err });

        res.status(200).json({message: "Login successful", products: products});
    });
});
}
export { signup, login };
