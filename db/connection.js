import mysql from "mysql2";

let connection;

/**
 * Function to establish a MySQL database connection if one doesn't already exist.
 * Utilizes connection pooling to ensure only a single instance is maintained.
 * 
 * @returns {object} connection - The active MySQL connection object.
 */
const dbconnection = () => {
    // Check if a connection instance already exists to prevent redundant connections.
    if (!connection) {
       // Initialize a new database connection using MySQL credentials and database information.
      connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "online_store",
  });

  connection.connect((err) => {
    if (err) return console.log("database error", err);

    console.log("database connected successfuly...");
  });
}
  return connection
};

export default dbconnection;
