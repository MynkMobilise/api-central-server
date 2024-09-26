const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aiStudio_dev'
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

module.exports = mysqlConnection;
