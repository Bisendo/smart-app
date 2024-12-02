const mysql = require('mysql2');

// Create a connection pool to the database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Attempt to connect to the database using a connection from the pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Hello Mr Kimoto Successfully connected to the database.');

  // After using the connection, release it back to the pool
  connection.release();
});
