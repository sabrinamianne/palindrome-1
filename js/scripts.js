$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();

   var user_answer = $("input#palindrome_user").val();
   var i;
   var sentence = " ";
   function palindrome (str) {
   for ( i = str.length - 1 ; i>= 0 ; i--) {
    sentence += str[i];
   }
   return sentence;
 }

   $("#finalResult").text(palindrome(user_answer));
   $("#hidden").show();
 });
 });
