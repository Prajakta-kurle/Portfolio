/*function toggleMenu()
{
  const menu = document.querySelector(".menulinks")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open");
  icon.classList.toggle("open");  

}*/
function myfunction() {
  let menu = document.querySelector('.menu-links'); // Ensure the selector matches the CSS
  if (menu.style.display === "flex") { // 'flex' instead of 'block' since you set it to 'flex' in the CSS
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.project-card').length;
const projects = document.querySelector('.project-slider');

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to the first slide
    }
    updateSlidePosition();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Loop to the last slide
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    projects.style.transform = `translateY(-${currentSlide * 100}%)`; // Adjust to fit the height of each card
}

// Attach event listeners to the prev and next buttons (optional)
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

// Optionally, you can add an interval to auto-slide
setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

