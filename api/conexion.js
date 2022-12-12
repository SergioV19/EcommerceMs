const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
console.log(module.exports)
