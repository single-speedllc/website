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
    const speedForward = 100; // Typing speed
    const speedBackward = 50; // Deleting speed
    const pause = 2000; // Pause at the end of typing each stage

    if (isDeleting) {
        currentText = parts[currentPart].substring(0, currentText.length - 1);
    } else {
        currentText = parts[currentPart].substring(0, currentText.length + 1);
    }

    textContainer.innerHTML = staticText + currentText;

    if (!isDeleting && currentText === parts[currentPart]) {
        setTimeout(() => { isDeleting = true; }, pause);
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentPart = (currentPart + 1) % parts.length;
    }

    let timeout = isDeleting ? speedBackward : speedForward;
    setTimeout(typeText, timeout);
}

document.addEventListener("DOMContentLoaded", typeText);
