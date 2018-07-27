// import connection.js 
var connection=require("./connection.js");

var orm = {
    selectAll:function(tableName,cb) {
     var queryString = "SELECT * FROM ??";   
     connection.query(queryString,[tableName],function(err,result) {
         if(err) throw err;
         //console.log(result);
         cb(result);
     });
    },

    insertOne:function(burgerInput,devouredInput,cb){
     var queryString= "INSERT INTO burgers (burgerName,devoured) VALUES (?,?)";
     connection.query(queryString,[burgerInput,devouredInput],function(err,result){
         if(err) throw err;
        //  console.log("successfully added");
        //  console.log("affected rows :",(result).affectedRows);
        cb(result);
     });
    },
    updateOne:function(columName1,stateBurger,columName2,valueId,cb){
        var queryString= "UPDATE burgers SET ?? = ? WHERE ?? = ?";
        connection.query(queryString,[columName1,stateBurger,columName2,valueId],function(err,result){
            if(err) throw err;
            // console.log("successfully updated");
            // console.log("changed rows :",(result).changedRows);
            cb(result);
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

