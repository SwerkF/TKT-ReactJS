const  mysql=require('mysql');

const connexion=mysql.createConnection({
host:'localhost',
user:'root',
database:'',
port:'3306'
});

module.exports = connexion;