const mysql = require('mysql2');  
const pool = mysql.createPool({  
  host: "localhost",  
  user: "root",  
  password: "deexith2024"  
});  

module.exports = pool.promise()