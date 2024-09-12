// Quotes data
const quotes = {
    'A': [
        'A quote that starts with A.',
        'Another A quote.',
        'A ballet of the obvious',
        'A beautiful theory killed by some ugly little facts.'
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
    // Hide the intro section
    document.getElementById('intro-section').style.display = 'none';

    // Show the quotes section
    const quotesSection = document.getElementById('quotes-section');
    quotesSection.style.display = 'block';

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