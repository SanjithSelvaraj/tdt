function navOpen() {
    document.querySelector(".nav-open-menu").classList.toggle("active");
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (!hamburgerIcon.src.includes('hamburger-close-icon.svg')) {
        hamburgerIcon.src = 'images/hamburger-close-icon.svg';
    } else {
        hamburgerIcon.src = 'images/hamburger-icon.svg';
    }
    // document.body.classList.toggle('overflow-y-hidden');
    document.documentElement.classList.toggle('overflow-y-hidden');
}


const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  // Function to update active dot
  function updateActiveDot() {
    dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
    dots[currentSlide].classList.add('active'); // Add active class to current dot
  }

  // Update the active dot initially
  updateActiveDot();

  // Automatically change the slide and active dot every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
    updateActiveDot(); // Update the dot
  }, 5000); // 5000ms = 5 seconds
