// frontend
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventdefault();
    var pingpong = $("number-input").val();
    console.log("1");
    var printscreen = products(pinpong);
    printscreen.foreach(function(element){
      $("#output").append("<li><h2>" + element + "</h2></li>");
    });
  });
});



 // backend
 function products(pingpong){
   var numbers = [];
   for (var i = 1; i <= pingpong; i ++) {
    if (i % 3) {
      console.log("2");
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
