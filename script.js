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
let charIndex = 0;
const textContainer = document.getElementById('text-container');

function typeText() {
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting) {
        currentText = parts[currentPart].substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === parts[currentPart].length) {
            setTimeout(() => { isDeleting = true; }, 2000);
        }
    } else {
        currentText = parts[currentPart].substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            currentPart = (currentPart + 1) % parts.length;
        }
    }

    textContainer.innerHTML = staticText + currentText + '<span id="cursor"></span>';
    setTimeout(typeText, speed);
}

document.addEventListener("DOMContentLoaded", typeText);
