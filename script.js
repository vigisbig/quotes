// Quotes data (replace this with your actual quotes data)
const quotes = {
    'A': [
        'A quote that starts with A.',
        'Another A quote.',
        'A third A quote.',
        'A fourth A quote.',
        'A fifth A quote.',
        'A sixth A quote.',
        'A seventh A quote.',
    ],
    'B': [
        'Believe in yourself.',
        'Be the change you wish to see.',
        'Boldness has genius, power, and magic in it.',
        'Breathe deeply and let go.',
    ],
    // Continue for other letters as needed
};

// Variables to handle pagination and search
let currentPage = 1;
let quotesPerPage = 5;
let currentQuotes = [];

// Function to display quotes based on the selected letter
function showQuotes(letter) {
    // Hide the intro section and show the quotes section
    document.getElementById('intro-section').style.display = 'none';
    document.getElementById('quotes-section').style.display = 'block';

    // Set the quotes for the selected letter
    currentQuotes = quotes[letter] || [];
    currentPage = 1; // Reset to the first page
    displayPaginatedQuotes();
}

// Function to display the quotes for the current page
function displayPaginatedQuotes() {
    const quotesList = document.getElementById('quotes-list');
    quotesList.innerHTML = ''; // Clear existing quotes

    // Get the quotes for the current page
    const startIndex = (currentPage - 1) * quotesPerPage;
    const endIndex = Math.min(startIndex + quotesPerPage, currentQuotes.length);
    const paginatedQuotes = currentQuotes.slice(startIndex, endIndex);

    // Display the paginated quotes
    paginatedQuotes.forEach((quote) => {
        const li = document.createElement('li');
        li.textContent = quote;
        quotesList.appendChild(li);
    });

    // Update pagination controls
    updatePaginationControls();
}

// Function to create and display pagination controls
function updatePaginationControls() {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = ''; // Clear existing controls

    const totalPages = Math.ceil(currentQuotes.length / quotesPerPage);

    // Only show pagination if more than one page exists
    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add(i === currentPage ? 'active' : '');
            button.addEventListener('click', () => {
                currentPage = i;
                displayPaginatedQuotes();
            });
            paginationControls.appendChild(button);
        }
    }
}

// Function to filter quotes based on a search term
function searchQuotes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filter current quotes by search term
    const filteredQuotes = currentQuotes.filter(quote => 
        quote.toLowerCase().includes(searchTerm)
    );
    
    // Update quotes list based on the search result
    displayFilteredQuotes(filteredQuotes);
}

// Function to display filtered quotes
function displayFilteredQuotes(filteredQuotes) {
    const quotesList = document.getElementById('quotes-list');
    quotesList.innerHTML = ''; // Clear existing quotes

    if (filteredQuotes.length > 0) {
        filteredQuotes.forEach((quote) => {
            const li = document.createElement('li');
            li.textContent = quote;
            quotesList.appendChild(li);
        });
    } else {
        // If no quotes match the search term
        const li = document.createElement('li');
        li.textContent = 'No quotes found.';
        quotesList.appendChild(li);
    }

    // Hide pagination controls when search is active
    document.getElementById('pagination-controls').style.display = 'none';
}

// Initialize the default state when the page loads
function init() {
    // Show the introduction section and hide the quotes section initially
    document.getElementById('intro-section').style.display = 'block';
    document.getElementById('quotes-section').style.display = 'none';
}
