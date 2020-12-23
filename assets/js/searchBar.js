searchBar = document.querySelector(".SearchBar")

searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        window.location="/search.html?search=" + searchBar.value; 
    }
});