//Navbar
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});


//Scroll Events
const pagination = document.querySelectorAll('.pagination li a');
const sections = document.querySelectorAll('.main-section');
const offset = 100;


//Loop through sections
for(let i = 0; i < sections.length; i++) {
    //Set scroll event or window
    window.addEventListener('scroll', () => {
        //Activate pagination when the corresponding section is scrolled over
        if(
            window.scrollY > sections[i].offsetTop - offset &&
            window.scrollY < sections[i].offsetTop + sections[i].offsetHeight - offset
        ) {
            //Remove active class from all pagination
            pagination.forEach(pag => {
                pag.classList.remove('active');
            });
            //Set active class to corresponding pagination
            pagination[i].classList.add('active');
        }
    });
}

// JavaScript for form validation and submission
// Reference: https://www.w3schools.com/js/js_validation.asp
function validateForm() {
    // Extract values from the form
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

      // Simple validation
      if (name === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation using regular expression
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

    // If the form is valid, submit the form
    document.getElementById('contactForm').submit();
}











