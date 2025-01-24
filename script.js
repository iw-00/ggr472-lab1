// Create variables for buttons.
const extWeb = document.getElementById("ext-website");
const geojson = document.getElementById("geojson");

// Open external website in new tab on click.
extWeb.addEventListener("click", () => {
    window.open("https://www.destinationontario.com/en-ca/articles/best-places-for-stargazing-ontario", "_blank");
});

// Open geojson in new tab on click.
geojson.addEventListener("click", () => {
    window.open("data/stargazing_sites.geojson", "_blank");
});