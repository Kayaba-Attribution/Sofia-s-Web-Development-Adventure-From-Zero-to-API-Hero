// Wait for the DOM to be fully loaded before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Sofia's Web Development Adventure!");
    
    // You can add more JavaScript code here as you progress through the project
});

// Example function to change text color (you can expand on this later)
function changeColor(elementId) {
    console.log("Changing color of element with id: " + elementId);
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = getRandomColor();
    }
}


const sofiBtn = document.getElementById("sofiBtn");
sofiBtn.addEventListener("click", function() {
    changeColor("body");
});

// Helper function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/* APIs to use:
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
https://pokeapi.co/
https://jsonplaceholder.typicode.com/
*/