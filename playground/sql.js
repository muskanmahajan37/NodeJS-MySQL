var mysql = require('mysql');

var connection = mysql.createConnection({
		host:"localhost",
		user:"root",
		pass:"root",
		database:"vinit"
});

connection.connect();                                                                                                                                                                                                                                                                                                                                              

var user ={
	name:"Vinit Shahdeo",
	phone:"8870855940"
}

connection.query("insert into users values set ?"+user,function(err,results)
{
		if(err)
		{
			console.log(err);
			return;
		}
		console.log(results);
});