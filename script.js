const parts = [
    "pre-revenue ($0-$1M ARR).",
    "early revenue ($1M-$10M ARR).",
    "growth ($10M-$30M ARR).",
    "expansion ($30M-$100M ARR)."
];

let currentPart = 0;
let currentText = "";
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.getElementById('dynamic-text');
const cursor = document.getElementById('cursor');

function typeText() {
    if (isDeleting) {
        currentText = parts[currentPart].substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = parts[currentPart].substring(0, charIndex + 1);
        charIndex++;
    }

    dynamicText.textContent = currentText;

    if (!isDeleting && charIndex === parts[currentPart].length) {
        cursor.style.animation = 'blink 1s step-end infinite';
        setTimeout(() => {
            isDeleting = true;
            cursor.style.animation = ''; // Solid cursor when deleting starts
        }, 2000); // Pause before starting to delete
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentPart = (currentPart + 1) % parts.length;
    } else {
        cursor.style.animation = ''; // Solid cursor while typing or deleting
    }

    setTimeout(typeText, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeText);
