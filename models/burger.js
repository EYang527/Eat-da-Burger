//Export ORM obj

var orm = require ("../config/orm.js")

var burger = {
    selectall: function(cb) {
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },

    insertOne: function(burgerName,devouredState,cb) {
        orm.insertOne(burgerName,devouredState,function(res){
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

//burger.selectall(function(data){console.log(data)});
// burger.insertOne("Mc Flurry7777",false,function(data){console.log(data)});
//burger.updateOne("devoured",true,"id",21,function(data){console.log(data)});
