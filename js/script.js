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