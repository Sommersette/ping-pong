
 // backend
 function products()
    if() {

    } else if {

    } else if {

    } else if {

    } else {

    }


 // frontend
 $(document).ready(function(){
   $("#form").submit(function(event){
     event.preventDefault();
     var pingpong = $("number-input").val();
     var printscreen = products(pinpong);
      printscreen.forEach(function(element){
        $("#output").append("<li><h2>" + element + "</h2></li>");
      });


     }
     return
   });

});
