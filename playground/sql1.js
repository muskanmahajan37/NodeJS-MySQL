const mysql = require('mysql');

var connection = mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"root",
		database:"users",
		multipleStatements:true;
});

connection.connect();

var id='4;drop database users';

var query= connection.query("selct * from users where id = "+id,function(err,res)
{
		if(err)
		{
			console.log(err);
		}
		console.log(res);
		console.log(query.sql);
});