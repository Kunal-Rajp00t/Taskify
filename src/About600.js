// Function to handle window resize event
function handleResize() {
    var aboutSec = document.querySelector('.about-sec');
    if (window.innerWidth <= 600) {
        // Add row-cols-1 class
        aboutSec.classList.remove('row-cols-2');
        aboutSec.classList.add('row-cols-1');
    } else {
        // Remove row-cols-1 class
        aboutSec.classList.remove('row-cols-1');
        aboutSec.classList.add('row-cols-2');
    }
}

// Initial call to handleResize to set initial state
handleResize();

// Event listener for window resize
window.addEventListener('resize', handleResize);