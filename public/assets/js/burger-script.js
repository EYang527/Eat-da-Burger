$(document).ready(function(){
    console.log("hello");

$("#burger-choice").val("testing");
$("#submitBurger").prop("value","re-submit");

submitBurger

})

$(document).on("click",".buttons",function(){

   var id=$(this).val();

   console.log("button clicked ID is :",id);   
var data ={
    "id":id
};


$.ajax("/",{type:"PUT",data}).then(function(){
    console.log("updated burger state...");  
    location.reload();  
});

});





