const textContainer = document.getElementById('text-container');
const staticText = document.getElementById('static-text');

// Function to check if the device is likely a mobile device based on screen width
function checkIfMobile() {
    return window.innerWidth <= 600;
}

// Dynamic typing effect
function typeText() {
    if (checkIfMobile()) {
        textContainer.style.display = 'none';
        staticText.style.display = 'block';
        return; // Stop dynamic text if on mobile
    } else {
        textContainer.style.display = 'block';
        staticText.style.display = 'none';
        // Continue with dynamic text logic
        const parts = ["pre-revenue ($0-$1M ARR).", "early revenue ($1M-$10M ARR).", "growth ($10M-$30M ARR).", "expansion ($30M-$100M ARR)."];
        let currentPart = 0;
        let currentText = '';
        let isDeleting = false;

        function type() {
            const speedForward = 100; // typing speed
            const speedBackward = 50; // deleting speed
            const pause = 2000; // pause between parts

            if (isDeleting) {
                currentText = parts[currentPart].substring(0, currentText.length - 1);
            } else {
                currentText = parts[currentPart].substring(0, currentText.length + 1);
            }

            textContainer.innerHTML = "Helping B2B SaaS startups scale through " + currentText;

            if (!isDeleting && currentText === parts[currentPart]) {
                setTimeout(() => isDeleting = true, pause);
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                currentPart = (currentPart + 1) % parts.length;
                if (currentPart === 0) {
                    textContainer.innerHTML = "Helping B2B SaaS startups scale through "; // Reset to initial state every cycle
                }
            }

            setTimeout(type, isDeleting ? speedBackward : speedForward);
        }

        type(); // Start typing effect
    }
}

document.addEventListener("DOMContentLoaded", typeText);
window.onresize = typeText; // Recheck on window resize
