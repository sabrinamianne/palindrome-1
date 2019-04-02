$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();

   var user_answer = $("input#palindrome_user").val();


   function palindrom (str) {
     var sentence = " " ;
     for ( var i = str.length - 1; i > 1 ; i--) {
       sentence += str[i];
       return sentence;
   }
 }
   $("#finalResult").text(palindrom(user_answer));
   $("#hidden").show();
 });
 });
