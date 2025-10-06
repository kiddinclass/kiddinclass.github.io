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
const copyBtn = document.getElementById('copy-btn');
const codeOutput = document.getElementById('code-output');

// Add an event listener to the generate button
generateBtn.addEventListener('click', () => {
    const newCode = generateEpicClassCode();
    codeOutput.textContent = newCode;
    copyBtn.textContent = 'Copy'; // Reset copy button text
    copyBtn.classList.remove('copied'); // Reset copy button color
});

// Add an event listener to the copy button
copyBtn.addEventListener('click', () => {
    const code = codeOutput.textContent;
    if (code) { // Ensure there is code to copy
        navigator.clipboard.writeText(code)
            .then(() => {
                copyBtn.textContent = 'Copied!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                    copyBtn.classList.remove('copied');
                }, 1500); // Change text back after 1.5 seconds
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }
});
