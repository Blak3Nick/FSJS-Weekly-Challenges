//variables
var user_Input= '';

//create function
  //control and return statements
window.onload = function() {

//Prompt user for input and store variable
user_Input = prompt("What is the customary term when greeting someone?");

if (user_Input === 'Hello') {
    alert('Hello world!');
}
else {
  alert('Does not compute...');
}
document.getElementById("trybtn").addEventListener("click", function(){
    user_Input = prompt("What is the customary term when greeting someone?");

if (user_Input === 'Hello') {
    alert('Hello world!');
}
else {
  alert('Does not compute...');
}
});
//Call function
}
//Alert user results

