/* .js files add interaction to your website */
/*title*/

//Cancel Culture btt, up of the page
const restart = document.getElementById ("restart");

restart.addEventListener("click", restartPage);

function restartPage() {

  window.location.href = "index.html";


}


const prosAndCons = document.getElementById("prosAndCons");

//the if tells java to only apply the event listener, if the id="prosAndCons" is on the page
if (prosAndCons){
  prosAndCons.addEventListener("click",goToProsAndConsPage);
}

// Function to ProsAndCons.html
function goToProsAndConsPage() {
  console.log("going to ProsAndCons.html");
  window.location.href = "ProsAndCons.html";
}

//key feature: fact generator
var prosList = [
  "Cancel culture allows marginalized people to seek accountability where the justice system fails.", //0
  "Cancel culture gives a voice to disenfranchised or less powerful people.",
  "Cancel culture is simply a new form of boycott, a cherished tactic in the civil rights movement, to bring about social change."
  
];

var pros = document.getElementById("pros");
var prosBtt = document.getElementById("prosBtt");
var count = 0;

if (prosBtt) {
  prosBtt.addEventListener("click", displayPros);
 
}

function displayPros() {
  pros.innerHTML = prosList [count];
  count++; /*+1*/

  if (count == prosList.length){
    count = 0;
  }
}

var consList = [
  "Cancel culture amounts to online bullying and can incite violence and threats even worse than the original offense being called out.", //0
  "Cancel culture is not productive and does not bring about social change.",
  "Cancel culture is a slippery slope and leads to intolerance in democratic societies as people systematically exclude anyone who disagrees with their views."

];

var cons = document.getElementById("cons");
var consBtt = document.getElementById("consBtt");
var count = 0;

if (consBtt) {
  consBtt.addEventListener("click", displayCons);
}

function displayCons() {
  cons.innerHTML = consList [count];
  count++;

  if (count == consList.length){
    count = 0;
  }
}



