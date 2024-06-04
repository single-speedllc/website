const parts = [
    "pre-revenue ($0-$1M ARR).",
    "early revenue ($1M-$10M ARR).",
    "growth ($10M-$30M ARR).",
    "expansion ($30M-$100M ARR)."
];

const staticText = "Helping B2B SaaS startups scale through ";
let currentPart = 0;
let currentText = "";
let charIndex = 0;
let isDeleting = false;
let textContainer = document.getElementById('text-container');
let textElement = document.createElement('span');
textElement.id = 'text';
let cursor = document.createElement('span');
cursor.id = 'cursor';
cursor.textContent = '|';

textContainer.appendChild(textElement);
textContainer.appendChild(cursor);

function typeText() {
    if (isDeleting) {
        if (charIndex > 0) {
            currentText = parts[currentPart].substring(0, charIndex - 1);
            charIndex--;
        } else {
            isDeleting = false;
            currentPart = (currentPart + 1) % parts.length;
            setTimeout(typeText, 500); // Pause before starting to type the next part
            return;
        }
    } else {
        if (charIndex < parts[currentPart].length) {
            currentText = parts[currentPart].substring(0, charIndex + 1);
            charIndex++;
        } else {
            isDeleting = true;
            setTimeout(typeText, 2000); // Pause before starting to delete
            return;
        }
    }

    textElement.innerHTML = staticText + currentText;
    setTimeout(typeText, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeText);
