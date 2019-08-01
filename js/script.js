//Business logic
function Styles(style, salonist){
   this.style = style;
   this.salonist = salonist;
}
Styles.prototype.totalCost = function(){
   return  this.style + this.salonist;
}
//User interface logic
$(document).ready(function(){
   $("#img4").on("click", function(){
      $("#detail4").toggle('slow');
   });
   $("#img5").on("click", function(){
      $("#detail5").toggle('slow');
   });
   $("#img6").on("click", function(){
      $("#detail6").toggle('slow');
   });
//    $("#button1").on("click", function(){
//       $("#getForm1").toggle('slow');
//   });
  $("form#myForm4").submit(function(event){
  event.preventDefault();
    var mwamba = $("input[name='salonist']:checked", '#forForm').val();
    var hairStyle = parseInt( $(this).find( $("select#valueSelect3")).val());
    // alert(hairStyle);
    var radio = $("input[name='salonist']:checked").val();
     if(radio=="yes"){
          //prompt("Enter your details in the form below")
       }
      if (radio=="yes"){
       var rosette = parseInt(1500);
       }
      // alert(rosette);
      // alert(hairStyle)
    var totalPayment = new Styles(rosette,hairStyle);
    alert("Your total cost is Ksh. " + totalPayment.totalCost());
  });
  $("form#myForm5").submit(function(event){
  event.preventDefault();
    var mwamba = $("input[name='salonist']:checked", '#forForm').val();
    var hairStyle = parseInt( $(this).find( $("select#valueSelect4")).val());
    // alert(hairStyle);
    var radio = $("input[name='salonist']:checked").val();
     if(radio=="yes"){
          //prompt("Enter your details in the form below")
       }
      if (radio=="yes"){
       var samson = parseInt(1000);
       }
      // alert(rosette);
      // alert(hairStyle)
    var totalPayment = new Styles(samson,hairStyle);
    alert("Your total cost is Ksh. " + totalPayment.totalCost());
  });
  $("form#myForm6").submit(function(event){
  event.preventDefault();
    var mweheni= $("input[name='salonist']:checked", '#forForm').val();
    var hairStyle = parseInt( $(this).find( $("select#valueSelect5")).val());
    // alert(hairStyle);
    var radio = $("input[name='salonist']:checked").val();
     if(radio=="yes"){
          //prompt("Enter your details in the form below")
       }
      if (radio=="yes"){
       var shantel = parseInt(900);
       }
    var totalPayment = new Styles(shantel,hairStyle);
    alert("Your total cost is Ksh. " + totalPayment.totalCost());
  });
});
    this.style = style;
    this.salonist = salonist;
 }
 Styles.prototype.totalCost = function(){
    return  this.style + this.salonist;
 }
 
 
 
 //User interface logic
 $(document).ready(function(){
    $("#img1").on("click", function(){
       $("#detail1").toggle('slow');
    });
    $("#img2").on("click", function(){
       $("#detail2").toggle('slow');
    });
    $("#img3").on("click", function(){3
       $("#detail3").toggle('slow');
    });

    $("#radio1").on("click", function(){
      $("#myForm1").toggle('slow');
  });
  $("#radio2").on("click", function(){
   $("#myForm2").toggle('slow');
   $("#radio3").on("click", function(){
      $("#myForm3").toggle('slow');
  });
});
   
   $("form#myForm1").submit(function(event){
   event.preventDefault();
     var oburu = $("input[name='salonist']:checked", '#forForm').val(); 
     var hairStyle = parseInt( $(this).find( $("select#valueSelect")).val());
 
     //alert(hairStyle);
     var radio = $("input[name='salonist']:checked").val();
      if(radio=="yes"){
         
         
        }
       if (radio=="yes"){
        var jane = parseInt(1000);
        } else{
            jane = praseInt(0);
        }
       //alert(deliveryFee);
 
     var totalPayment = new Styles(jane,hairStyle);
     alert("Your total cost is Ksh. " + totalPayment.totalCost());
 
   });

   $("form#myForm2").submit(function(event){
    event.preventDefault();
      var mwikali = $("input[name='salonist']:checked", '#forForm').val(); 
      var hairStyle = parseInt( $(this).find( $("select#valueSelect1")).val());
  
      var radio = $("input[name='salonist']:checked").val();
       if(radio=="yes"){
            //prompt("Enter your details in the form below")
         }
        if (radio=="yes"){
         var happiness = parseInt(1500);
         }else{
             parseInt(0);
         }
  
        //  alert(hairStyle);
      var totalPayment = new Styles(happiness,hairStyle);
      alert("Your total cost is Ksh. " + totalPayment.totalCost());
  
    });
    $("form#myForm3").submit(function(event){
        event.preventDefault();
          var johns = $("input[name='salonist']:checked", '#forForm').val(); 
          var hairStyle = parseInt( $(this).find( $("select#valueSelect2")).val());
      
          var radio = $("input[name='salonist']:checked").val();
           if(radio=="yes"){
                //prompt("Enter your details in the form below")
             }
            if (radio=="yes"){
             var paul = parseInt(2500);
             }else{
                 paul=parseInt(0);
             }
      
            //  alert(hairStyle);
          var totalPayment = new Styles(paul,hairStyle);
          alert("Your total cost is Ksh. " + totalPayment.totalCost());
      
        });
 });
