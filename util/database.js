const mysql = require('mysql2');  
try{
    var pool = mysql.createPool({
        host: "localhost",
        user: "root",
        database: "node-schema",
        password: "deexith2024",
    });
} catch (err){
    console.log(err)
}

module.exports = pool.promise()