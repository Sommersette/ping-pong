
 // backend
 function products(pingpong){
   var numbers = [];
   for(var i = 1; i <= pingpong; i ++) {
    if(3 % i) {
      push.("ping!")


    }
  }
}
    return

 // frontend
 $(document).ready(function(){
   $("#form").submit(function(event){
     event.preventDefault();
     var pingpong = $("number-input").val();
     var printscreen = products(pinpong);
      printscreen.forEach(function(element){
        $("#output").append("<li><h2>" + element + "</h2></li>");
      });

   });
});
