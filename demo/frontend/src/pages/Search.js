
document.addEventListener('DOMContentLoaded', function() {
  // Get references to DOM elements
  const searchInput = document.querySelector('.search-bar input[type="text"]');
  const searchButton = document.querySelector('.search-bar button');
  const comicsList = document.querySelector('.comics ul');
  const charactersList = document.querySelector('.characters ul');

  // Function to handle search
  function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Clear previous search results
    comicsList.innerHTML = '';
    charactersList.innerHTML = '';

    for (let i = 1; i <= 3; i++) {
      const comic = `Comic ${i}`;
      if (comic.toLowerCase().includes(searchTerm)) {
        const comicItem = document.createElement('li');
        comicItem.textContent = comic;
        comicsList.appendChild(comicItem);
      }
    }


    for (let i = 1; i <= 3; i++) {
      const character = `Character ${i}`;
      if (character.toLowerCase().includes(searchTerm)) {
        const characterItem = document.createElement('li');
        characterItem.textContent = character;
        charactersList.appendChild(characterItem);
      }
    }
  }

  // Event listener for search button click
  searchButton.addEventListener('click', handleSearch);

  // Event listener for Enter key press in search input
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
});
