let isWhite = true;

document.getElementById('colorButton').addEventListener('click', function() {
    // Toggle between white and black
    isWhite = !isWhite;

    // Get the body element
    let body = document.body;

    // Change the background color based on the toggle state
    body.style.backgroundColor = isWhite ? '#30302a' : '#ccd38c';
});
