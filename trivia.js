// Initialize trivia answer buttons.
const mitchell = document.getElementById("mitchell");
const brown = document.getElementById("brown");
const burnell = document.getElementById("burnell");
const eddington = document.getElementById("eddington");


// Open alert on click for each button.
mitchell.addEventListener("click", () => {
    alert("Nope! Try again.");
});

brown.addEventListener("click", () => {
    alert("Not quite! Try again.");
    
});

burnell.addEventListener("click", () => {
    alert("Woohoo! You got it.");
    
});

eddington.addEventListener("click", () => {
    alert("Not exactly! Try again.");
});
