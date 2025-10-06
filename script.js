// Function to generate the random Epic class code
function generateEpicClassCode() {
    let letters = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 3; i++) {
        letters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    let numbers = '';
    for (let i = 0; i < 4; i++) {
        numbers += Math.floor(Math.random() * 10);
    }

    return letters + numbers;
}

// Get the button and output elements from the HTML
const generateBtn = document.getElementById('generate-btn');
const codeOutput = document.getElementById('code-output');

// Add an event listener to the button
generateBtn.addEventListener('click', () => {
    // Generate a new code and display it on the page
    const newCode = generateEpicClassCode();
    codeOutput.textContent = newCode;
});
