$(document).ready(function(){
    $("#submit").click(function(event){
        var name= $("input#name").val();
        event.preventDefault();

        alert("Hi," + name + " , " + "Your order will be delivered at your place");

        
    });
});

function pizza(toppings, crust ,size , total , orderNumber, finalTotal) {
    this.toppings= toppings;
    this.crust= crust;
    this.size= size
    this.total= total;
    this.orderNumber= orderNumber;
    this.finalTotal=finalTotal;

    var newPizza = new Pizza(sizePizza, toppingsPizza, crustPizza, total, order);
    var newRow = '<tr><th scope="row">' + newPizza.orderNumber + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.toppings + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
    $("#pizza").append(newRow);
     
}
$('btn .cart').click(function() {
     var sizePizza = $(".size option:selected").val();
     var toppingsPizza = $(".toppings option:selected").val();
     var crustPizza = $(".crust option:selected").val();
     var total = parseInt(sizePizza) + parseInt(toppingsPizza) + parseInt(crustPizza);
     var order = 1;
     var finalTotal = finalTotal + total;

     
     $("#size").html($(".size option:selected").text() + " - " + sizePizza);
     $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsPizza);
     $("#crust").html($(".crust option:selected").text() + " - " + crustPizza);
     $("#total").html(total);
     
     
    });
}); 

