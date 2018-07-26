//requirinf mysql package

var mysql=require("mysql");

// Setting up our connection info
var source={
    localhost:
    {
        host:"localhost",
        port:3306,
        user:"root",
        password:"root",
        database:"burgers_db",
    }
}

//creating the connection
var connection=mysql.createConnection(source.localhost);

// connecting to the database.
connection.connect(function(err){
    if(err) {
        throw err
        console.log(err)
    }
    else 
    console.log("connected with connection id :",connection.threadId);

});

module.exports =connection;





