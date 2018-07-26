// import connection.js 
var connection=require("./connection.js");

var orm = {
    selectAll:function(tableName) {
     var queryString = "SELECT * FROM ??";   
     connection.query(queryString,[tableName],function(err,result) {
         if(err) throw err;
         console.log(result);
     });
    },

    insertOne:function(burgerInput,devouredInput){
     var queryString= "INSERT INTO burgers (burgerName,devoured) VALUES (?,?)";
     connection.query(queryString,[burgerInput,devouredInput],function(err,result){
         if(err) throw err;
         console.log("successfully added");
         console.log("affected rows :",(result).affectedRows);

     });
    },
    updateOne:function(columName1,stateBurger,columName2,valueId){
        var queryString= "UPDATE burgers SET ?? = ? WHERE ?? = ?";
        connection.query(queryString,[columName1,stateBurger,columName2,valueId],function(err,result){
            if(err) throw err;
            console.log("successfully updated");
            console.log("changed rows :",(result).changedRows);
        })
    },

}
// // --- TESTING ---- PASSED OK !
// //  ex: select * from burgers
// orm.selectAll("burgers");
// //  ex: INSERT INTO burgers(burgerName,devoured) VALUES ("Whooper",false);
// orm.insertOne("burgers","Mc double",false);
// //  ex: UPDATE burgers SET devoured = true WHERE id = 11
// orm.updateOne("devoured",true,"id",15);


module.exports = orm;

