            // frontend
$(document).ready(function() {
  $("#usernumbers").submit(function(event) {
    event.preventDefault();
    var pingpong = parseInt($("input").val());
    var printscreen = products(pingpong);
    printscreen.forEach(function(element){
      $("#output").append("<li><h2> "+ element +" </h2></li>");
    });
  });
});



            // backend
 var products = function(pingpong){
   var numbers = [];
   for (var i = 1; i <= pingpong; i ++) {
     if (i % 3 === 0 && i % 5 === 0) {
     numbers.push("PING-PONG!");
   } else if (i % 5 === 0) {
     numbers.push("pong!");
  } else if (i % 3 === 0) {
      numbers.push("ping!");
  }  else {
      numbers.push(i);
  }
}
  return numbers;
}
