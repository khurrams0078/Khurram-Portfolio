// Array of texts to cycle through
const texts = [
    "Developer",
    "Designer",
    "Freelancer",
    "Photographer",
    "Computer Expert"
];

const changingTextElement = document.getElementById("changingText");
let currentIndex = 0;

function changeText() {
    changingTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

// Initial text change
changeText();

// Set interval to change text every 3 seconds (3000 milliseconds)
setInterval(changeText, 2000);