const scrollContainer = document.getElementById('scroll-container');

// Translate vertical mouse wheel scrolling to horizontal scrolling
scrollContainer.addEventListener('wheel', (evt) => {
    // Only intercept if we are scrolling vertically
    if (evt.deltaY !== 0) {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY * 2; // Multiplier for scroll speed
    }
}, { passive: false });
