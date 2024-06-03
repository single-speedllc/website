const parts = [
    "pre-revenue ($0-$1M ARR).",
    "early revenue ($1M-$10M ARR).",
    "growth ($10M-$30M ARR).",
    "expansion ($30M-$100M ARR)."
];

const staticText = "Helping B2B SaaS startups scale through ";
let currentPart = 0;
let currentText = '';
let charIndex = 0;
let isDeleting = false;
let textContainer = document.getElementById('text-container');

function typeText() {
    if (!isDeleting) {
        if (charIndex <= parts[currentPart].length) {
            currentText = parts[currentPart].substring(0, charIndex + 1);
            charIndex++;
        }
        if (charIndex > parts[currentPart].length) {
            // If the end of the current part is reached, start deleting after a pause
            setTimeout(() => {
                isDeleting = true;
            }, 2000); // Pause before starting to delete
        }
    } else {
        if (charIndex > 0) {
            currentText = parts[currentPart].substring(0, charIndex - 1);
            charIndex--;
        }
        if (charIndex === 0) {
            // If all characters are deleted, move to the next part or restart
            isDeleting = false;
            currentPart = (currentPart + 1) % parts.length;
        }
    }

    textContainer.innerHTML = staticText + currentText;

    // Set timeout for next execution
    setTimeout(typeText, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeText);
