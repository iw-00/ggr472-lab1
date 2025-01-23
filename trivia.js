const mitchell = document.getElementById("mitchell");
const brown = document.getElementById("brown");
const burnell = document.getElementById("burnell");
const eddington = document.getElementById("eddington");
const wiki = document.getElementById("wiki");

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
    alert("Nope! Try again.");
});

wiki.addEventListener("click", () => {
    window.open("https://en.wikipedia.org/wiki/Maria_Mitchell", "_blank");
    window.open("https://en.wikipedia.org/wiki/Elizabeth_Brown_(astronomer)", "_blank");
    window.open("https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell", "_blank");
    window.open("https://en.wikipedia.org/wiki/Arthur_Eddington", "_blank");
});
