// Quotes data
const quotes = {
    'A': [
        'A quote that starts with A.',
        'Another A quote.'
    ],
    'B': [
        'A beautiful quote.',
        'Believe in yourself.'
    ],
    // Continue for other letters
    'Z': [
        'Zen is not a state of mind.'
    ]
};

// Function to display quotes based on letter
function showQuotes(letter) {
    const quotesList = document.getElementById('quotes-list');
    quotesList.innerHTML = ''; // Clear existing quotes

    if (quotes[letter]) {
        quotes[letter].forEach((quote) => {
            const li = document.createElement('li');
            li.textContent = quote;
            quotesList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No quotes available for this letter.';
        quotesList.appendChild(li);
    }
}
