$(document).ready(function(){
    $("#submit").click(function(event){
        var name= $("input#name").val();
        event.preventDefault();

        alert("Hi," + name + " , " + "Your order will be delivered at your place");   
    });
});

$(document).ready(function(){
    $("table").hide();
    
    $('.btn#order').click(function() {
      var sizePizza = $(".size option:selected").val();
      var toppingsPizza = $(".toppings option:selected").val();
      var crustPizza = $(".crust option:selected").val();
      var total = parseInt(sizePizza) + parseInt(toppingsPizza) + parseInt(crustPizza);
      var order = 1;
      var grandTotal = 0;

      $("table").show();
      $(".btn.order").hide();
      $("#size").html($(".size option:selected").text() + " - " + sizePizza);
      $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsPizza);
      $("#crust").html($(".crust option:selected").text() + " - " + crustPizza);
      $("#total").html(total);

      function Pizza(size, toppings, crust, total, orderNo) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.total = total;
        this.orderNo = orderNo;
      }

      $('.btn#order').click(function() {
        var sizePizza = $(".size option:selected").val();
        var toppingsPizza = $(".toppings option:selected").val();
        var crustPizza = $(".crust option:selected").val();
        var total = parseInt(sizePizza) + parseInt(toppingsPizza) + parseInt(crustPizza);
        order = order + 1;
        grandTotal = grandTotal + total;

        var newPizza = new Pizza(sizePizza, toppingsPizza, crustPizza, total, order);
        var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.toppings + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
        $("#pizza").append(newRow);
      });

      $(".btn.check-out").click(function() {
        $(".btn.add-pizza").hide();
        $(".btn.check-out").hide();
        grandTotal = grandTotal + total;
        $(".additional-info h3 span").html(grandTotal);
      });

      $(".btn.yes").click(function() {
        $(".additional-info h5").hide();
        $(".btn.yes").hide();
        $(".btn.no").hide();
        $(".additional-info h3 span").html(grandTotal + 100);
      });
    });
  });
 