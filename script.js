// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const bird = document.getElementById('bird');
    
    function flapWings() {
        bird.style.animationPlayState = 'running';
        setTimeout(() => {
            bird.style.animationPlayState = 'paused';
        }, 1000); // Match the duration of the animation
    }

    setInterval(flapWings, 5000 + Math.random() * 5000); // Flap wings every 5 to 10 seconds
});
