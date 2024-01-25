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













