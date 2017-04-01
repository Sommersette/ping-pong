            // frontend
$(document).ready(function() {
  $("#usernumbers").submit(function(event) {
    event.preventDefault();
    var pingpong = parseInt($("input#").val());
    alert(1)
    var printscreen = products(pingpong);
    printscreen.foreach(function(element){
      $("#output").append("<li><h2> "+ printscreen +" </h2></li>");
    });
  });
});



            // backend
 var products = function(pingpong){
   var numbers = [];
   for (var i = 1; i <= pingpong; i ++) {
    if (i % 3) {
      numbers.push("ping!");
  } else if (i % 5) {
      numbers.push("pong!");
  } else if ( i % 15) {
      numbers.push("PINGPONG!");
  }  else {
      numbers.push(i);
  }


}
  return numbers;
}
