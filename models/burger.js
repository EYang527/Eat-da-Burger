//Export ORM obj

var orm = require ("../config/orm.js")

var burger = {

    all: function(cb) {
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },

    insertOne: function(burger,devouredState,cb) {
        orm.insertOne(burger,devouredState,function(res){
            cb(res);
        });
    },

    updateOne: function(col1,devouredState,col2,reqId,cb){
        orm.updateOne(col1,devouredState,col2,reqId,function(res){
            cb(res);
        })
    },
}

module.exports = burger;


//=== TEST burger === (Passed OK!)

//burger.all(function(data){console.log(data)});
//burger.insertOne("Mc Flurry",false,function(data){console.log(data)});
//burger.updateOne("devoured",true,"id",21,function(data){console.log(data)});
