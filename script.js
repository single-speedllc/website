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
    const speedForward = 100; // typing speed
    const speedBackward = 50; // deleting speed
    const pause = 2000; // pause between parts

    if (isDeleting) {
        currentText = parts[currentPart].substring(0, currentText.length - 1);
    } else {
        currentText = parts[currentPart].substring(0, currentText.length + 1);
    }

    textContainer.innerHTML = staticText + currentText;

    let typingSpeed = isDeleting ? speedBackward : speedForward;

    if (!isDeleting && currentText === parts[currentPart]) {
        // If full text of part is displayed
        typingSpeed = pause;
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        // If text is fully deleted
        isDeleting = false;
        currentPart = (currentPart + 1) % parts.length; // Cycle through parts
        if (currentPart === 0) {
            textContainer.innerHTML = staticText; // Reset to initial state every cycle
        }
        typingSpeed = 500; // Delay before starting next part
    }

    setTimeout(typeText, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeText);
