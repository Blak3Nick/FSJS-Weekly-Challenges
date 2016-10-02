//#Week 6 JQuery Code Challenge
var btnPlus = $('#HeightIncrease');
var btnMinus = $('#HeightDecrease');
var box = $('#box');
var trackHeight = 20;
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
//Create a button that prints the object and its attributes to the page (use the span "output".
trackHeight = trackHeight;
 console.log(trackHeight);
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume