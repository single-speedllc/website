// script.js
const stages = [
    "Helping B2B SaaS startups scale through the pre-revenue ($0-$1M ARR)",
    "early revenue ($1M-$10M ARR)",
    "growth ($10M-$30M ARR)",
    "expansion ($30M-$100M ARR) lifecycle stages."
];

let currentStage = 0;
let currentText = '';
let isDeleting = false;
let textContainer = document.getElementById('text-container');

function typeText() {
    const speedForward = 100; // typing speed
    const speedBackward = 50; // deleting speed
    const pause = 2000; // pause between stages

    if (isDeleting) {
        currentText = stages[currentStage].substring(0, currentText.length - 1);
    } else {
        currentText = stages[currentStage].substring(0, currentText.length + 1);
    }

    textContainer.innerHTML = currentText;

    let typingSpeed = isDeleting ? speedBackward : speedForward;

    if (!isDeleting && currentText === stages[currentStage]) {
        // If full text is displayed
        typingSpeed = pause;
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        // If text is fully deleted
        isDeleting = false;
        currentStage = (currentStage + 1) % stages.length;
        typingSpeed = 500; // delay before starting next stage
    }

    setTimeout(typeText, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeText);
