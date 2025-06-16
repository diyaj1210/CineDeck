// Get the theme toggle button
const themeToggle = document.getElementById("themeToggle");

// When the button is clicked
themeToggle.addEventListener("click", () => {
    // Add or remove 'light-mode' on body
    document.body.classList.toggle("light-mode");

    // Change the icon on the button
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌞";  // Light mode icon
    } else {
        themeToggle.textContent = "🌙";  // Dark mode icon
    }
});

// Get the search input
const searchBar = document.getElementById("searchBar");

// Get all movie cards
const movieCards = document.querySelectorAll(".movie-card");

// When user types in search bar
searchBar.addEventListener("input", () => {
    const input = searchBar.value.toLowerCase();  // Get typed text

    // Loop through all cards
    movieCards.forEach(card => {
        const title = card.getAttribute("data-title").toLowerCase();

        // Show or hide based on match
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
