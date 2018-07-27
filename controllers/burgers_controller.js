var express = require("express");
var router=express.Router();

// import burger model
var burger = require("../models/burger.js")

// Create all our routes and set up logic within those routes where required.

// GET METHOD
router.get("/", function(req, res) {
    burger.selectall(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      //res.json("hello");
  res.render("index", hbsObject);
    });
  });
  
  // POST METHOD
  router.post("/", function(req, res) {
    console.log(req.body);
    var newBurger=req.body.burgerName;
    var newDState=false; // always create new burger with default state

    burger.insertOne(newBurger,newDState,function(data){
      console.log("affected Rows: ",data.affectedRows);
      res.redirect("/");    
    });   
  });

  // PUT METHOD
  router.put("/", function(req, res) {
    
    console.log(req.body);
    idValue=req.body.id;
    console.log("hello",idValue);

   //only idValue change in our case so this query always worked.
    burger.updateOne("devoured",true,"id",idValue,function(data){
     if(data.changedRows==0){
       //no rows changed, 
       return res.status(404).end();
     }else
     res.status(200).end();
     });
  })
  //burger.updateOne("devoured",true,"id",21,function(data){console.log(data)});
  module.exports = router;