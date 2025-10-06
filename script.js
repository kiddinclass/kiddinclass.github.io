/**
 * Generates a new Epic class code with three uppercase letters and four numbers.
 */
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

// Get the button and output elements from the HTML document
const generateBtn = document.getElementById('generate-btn');
const codeOutput = document.getElementById('code-output');

// Add an event listener to the button to generate and display a new code
generateBtn.addEventListener('click', () => {
    const newCode = generateEpicClassCode();
    codeOutput.textContent = newCode;
});
