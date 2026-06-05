// Get button element using its ID
const button = document.getElementById("changeColorBtn");

// Create an array of colors
const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "lightblue"
];

// Add click event to button
button.addEventListener("click", function () {

    // Generate a random index number
    const randomIndex = Math.floor(
        Math.random() * colors.length
    );

    // Change page background color
    document.body.style.backgroundColor =
        colors[randomIndex];

});