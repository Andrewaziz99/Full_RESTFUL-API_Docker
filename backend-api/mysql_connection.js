const Mysql = require('mysql');


let conn = new Mysql.createPool({
    host: '172.17.0.2', // IP/domain  
    post: 3306, //port, default 3306  
    user: 'root', // username
    password: 'my-secret-pw', // password
    insecureAuth : true,
});

if (conn) {
    console.log('Connected to database');
}

module.exports = conn;