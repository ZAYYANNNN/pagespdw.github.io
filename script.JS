// Function to update greeting message
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let greeting = '';

    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    document.getElementById('greeting').textContent = greeting;
}

// Function to update current date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleString('en-US', options);

    document.getElementById('currentDateTime').textContent = dateTimeString;
}

// Function to start the clock and update greeting
function startClock() {
    updateGreeting();
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
}

// Call startClock function when the page is loaded
window.onload = startClock;

const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselInner.children.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carouselInner.children.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});
