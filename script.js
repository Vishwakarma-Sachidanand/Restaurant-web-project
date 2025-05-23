document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const menuBtn = document.getElementById('menuBtn');
    const menuPopup = document.getElementById('menuPopup');
    const closeBtn = document.querySelector('.close-btn');

    // Open popup when menu button is clicked
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuPopup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    });

    // Close popup when close button is clicked
    closeBtn.addEventListener('click', function() {
        menuPopup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close popup when clicking outside the popup content
    window.addEventListener('click', function(e) {
        if (e.target === menuPopup) {
            menuPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuPopup.style.display === 'block') {
            menuPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 