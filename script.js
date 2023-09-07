const planchette = document.getElementById('planchette');
const options = document.querySelectorAll('.option');

// Function to move the planchette gradually up and align with an option
function movePlanchette() {
    const boardRect = document.getElementById('board').getBoundingClientRect();
    const randomX = Math.random() * (boardRect.width - planchette.clientWidth);
    const randomY = Math.random() * (boardRect.height - planchette.clientHeight);

    planchette.style.left = `${randomX}px`;
    planchette.style.top = `${randomY}px`;

    // After moving, gradually align with an option
    const randomOptionIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomOptionIndex];
    const optionRect = randomOption.getBoundingClientRect();
    const targetX = optionRect.left + (optionRect.width - planchette.clientWidth) / 2;
    const targetY = optionRect.top - 30; // Move up by adjusting this value
    const speed = 2; // Adjust the speed of the movement

    const moveInterval = setInterval(() => {
        const currentX = parseFloat(planchette.style.left);
        const currentY = parseFloat(planchette.style.top);

        if (Math.abs(currentX - targetX) < 1 && Math.abs(currentY - targetY) < 1) {
            clearInterval(moveInterval);
        } else {
            const deltaX = (targetX - currentX) / speed;
            const deltaY = (targetY - currentY) / speed;

            planchette.style.left = `${currentX + deltaX}px`;
            planchette.style.top = `${currentY + deltaY}px`;
        }
    }, 30);
}

// Add a click event listener to the planchette
planchette.addEventListener('click', movePlanchette);

