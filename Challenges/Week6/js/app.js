//#Week 6 JQuery Code Challenge
var btnPlus = $('#HeightIncrease');
var btnMinus = $('#HeightDecrease');
var printBtn = $("#Print");
var box = $('#box');
var trackHeight = 20;
var output = $('#output');

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.

btnPlus.click(function() {
    trackHeight = trackHeight +1;
  box.css('height', trackHeight);
  return trackHeight;
  
});
btnMinus.click(function() {
    trackHeight = trackHeight -1;
  box.css('height', trackHeight);
  return trackHeight;
  
});
printBtn.click(function(){
    output.append("<p>"+box+"</p>");
});
//Create a button that prints the object and its attributes to the page (use the span "output".

//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume