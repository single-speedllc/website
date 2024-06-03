const parts = [
    "pre-revenue ($0-$1M ARR).",
    "early revenue ($1M-$10M ARR).",
    "growth ($10M-$30M ARR).",
    "expansion ($30M-$100M ARR)."
];

const staticText = "Helping B2B SaaS startups scale through ";
let currentPart = 0;
let currentText = '';
let isDeleting = false;
let textContainer = document.getElementById('text-container');

function typeText() {
    let speed = isDeleting ? 50 : 100;  // Speed of typing or deleting

    if (!isDeleting) {
        currentText = parts[currentPart].substring(0, currentText.length + 1);
        if (currentText === parts[currentPart]) {
            setTimeout(() => { isDeleting = true; }, 2000); // Pause before deleting
        }
    } else {
        currentText = parts[currentPart].substring(0, currentText.length - 1);
        if (currentText === '') {
            isDeleting = false;
            currentPart = (currentPart + 1) % parts.length; // Move to the next part
        }
    }

    textContainer.innerHTML = staticText + currentText + '<span id="cursor"></span>';
    setTimeout(typeText, speed);
}

document.addEventListener("DOMContentLoaded", typeText);
