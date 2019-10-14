var totalCosts = [];
function order(size,toppings,crust,name) {
this.size = size;
this.toppings = toppings;
this.crust = crust;
this.name = name;
this.price = 0;
}
var size1 = ["small", "medium", "large"];
var toppings1 = ["pepperoni", "mushroom", "bacon", "onion"];
var crust1 = ["cheese", "bagels", "flatbread","chicago"];
var name1 = ["chicken", "beef", "hawaian"];
order.prototype.cost = function (){
if(this.size === size1[0]){
   this.price += 950;
    }
    else if(this.size === size1[1]){
           this.price += 1050;
    }
    else if(this.size === size1[2]){
        this.price += 1150;
    }
    if(this.toppings === toppings1[0]){
       this.price +=160 ;
        }
        else if(this.toppings === toppings1[1]){
               this.price += 200;
        }
        else if(this.toppings === toppings1[2]){
            this.price += 180;
        }
        if(this.crust === crust1[0]){
           this.price += 100;
            }
            else if(this.crust === crust1[1]){
                   this.price += 150;
            }
            else if(this.crust === crust1[2]){
                this.price += 180;
            }
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
   })
//prompt location
   $("#img").click(function(event) {
       prompt("Enter your location")
       alert("Your order will be delivered at yor entered location in 20minutes");
   });
 })


