var inquirer = require("inquirer");
var fs = require("fs");
var inputA = [];

/*var getInputA = function(inputA){
  if(inputA == "George Washington"){
    console.log("correct! "+ClozeCard.text)
  } else {
    console.log("nope!")
  }
}
//This doesn't work right.
*/

//*******************
// START CONSTRUCTORS
//*******************
//BASIC CARD CONSTRUCTOR
// constructor function used to create Basic Card objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;

      //  Prototype creates the printInfo method and applies it to all Basic Card objects
      BasicCard.prototype.printInfo = function() {
      console.log("Front of Card: " + this.front + "\nBack of Card: " + this.back);
      };
      //we can use this to call print info to any object that we construct
}
//*******************
//CLOZE CARD CONSTRUCTOR
// constructor function used to create Cloze Card objects
function ClozeCard(text, cloze, clozePartial, broken) {
  this.text = text;
  this.cloze = cloze;
  this.broken = broken;
  this.clozePartial = clozePartial;
  //this.clozeFull = clozeFull;

    // creates the printInfo method and applies it to all Cloze Card objects
    ClozeCard.prototype.printInfo = function() {
      console.log("Text: " + this.text + "\nCloze: " + this.cloze + "\nClozebroken: " + this.broken
               + "\nClozePartial: " + this.clozePartial + "\nClozeFull: " + this.clozeFull);
    };
}
//*******************
// END CONSTRUCTORS
//*******************

//*****************
// START OF EXAMPLES ON WEEK 11 ASSIGNMENT
//*****************
var firstPresident = new BasicCard("Who was the first president of the United States?","George Washington");
//Who was the first president of the united states?
console.log(firstPresident.front);
//George Washington
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first President of the United States", "George Washington", "... was the first President of the United States");
//"george washington"
console.log(firstPresidentCloze.cloze);
//"George Washington was the first President of the United States"
console.log(firstPresidentCloze.text);
//"... was the first President of the United States"
console.log(firstPresidentCloze.clozePartial);
//********** 


//EXAMPLE - of how I think this should work according to 
//the demo Franklin did in class
//**********
//var try1 = new BasicCard("This is the front of the card", "This is the back of the card");
//console.log(try1);
//var try2 = new ClozeCard("part 1", "2", "\n3", "and 4", "5");
//console.log(try2.clozePartial);
//**** YAY this worked

//I'm somewhat confused by the rest of the assignment.