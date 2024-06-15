document.addEventListener('DOMContentLoaded', function() {
    const sparkles = document.querySelectorAll('.sparkle');
    const colors = ['#d200f2', '#6a17d7', '#00011a', '#b9b6b6'];

    sparkles.forEach(sparkle => {
        const randomTop = Math.random();
        const randomLeft = Math.random();
        const randomDelay = Math.random();
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        sparkle.style.setProperty('--random-top', randomTop);
        sparkle.style.setProperty('--random-left', randomLeft);
        sparkle.style.setProperty('--random-delay', randomDelay);
        sparkle.style.backgroundColor = randomColor; // Assign a random color
    });
});