$(document).ready(function(){
    $("#order").click(function(event){
        var name= $("input#name").val();
        event.preventDefault();

        alert("Hi," + name + " , " + "Your order will be delivered at your place");   
    });
});
var totalCosts = [];
function order(size,toppings,crust,name) {
this.size = size;
this.toppings = toppings;
this.crust = crust;
this.name = name;
this.price = 0;
}
var size1 = ["small", "medium", "large"];
var toppings = ["pepperoni", "mushroom", "bacon", "extra cheese"];
var crust1 = ["cheese", "stuffed", "gluten free","crispy"];
order.prototype.cost = function (){
if(this.size === size1[0]){
   this.price += 950;
    } else if(this.size === size1[1]){
           this.price += 950;
    }
    else if(this.size === size1[2]){
        this.price += 1100;
    }
    if(this.toppings === toppings1[0]){
       this.price += 150;
        }
        else if(this.toppings === toppings1[1]){
               this.price += 180;
        }
        else if(this.toppings === toppings1[2]){
            this.price += 200;
        }
        // if(this.crust === crust1[0]){
        //    this.price += 100;
        //     }
        //     else if(this.crust === crust1[1]){
        //            this.price += 100;
        //     }
        //     else if(this.crust === crust1[2]){
        //         this.price += 100;
        //     }
            return this.price
}
               order.prototype.totalcost = function(){
                   var orderTotal = 0;
                   for(var order =0; order < totalCosts.length; order++){
                       orderTotal += totalCosts[order];
                   }
                   return orderTotal;

                }
//UI
$(document).ready(function() {
   $("button#submit").click(function(event) {
       event.preventDefault();
       var size = $("#size").val();
       var toppings =$("#toppings").val();
       var crust = $("#crust").val();
       var name = $("#name").val();
       var newPizzaOrder = new order(size,toppings,crust,);
      newPizzaOrder.cost();
      totalCosts.push(newPizzaOrder.price);
       alert(totalCosts)
   });
//delivery
   $("#deliver").click(function(event) {
       event.preventDefault();
       alert("your delivery cost is sh200")
   });

});
