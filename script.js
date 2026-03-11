document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check initial OS/Browser preference or local storage (if implemented)
    // Here we default to dark mode by having 'dark-mode' class on body in HTML.
    
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if(document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
        } else {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.replace('bx-menu', 'bx-x');
        } else {
            icon.classList.replace('bx-x', 'bx-menu');
        }
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.querySelector('i').classList.replace('bx-x', 'bx-menu');
        });
    });

    // --- Active Link Switching on Scroll ---
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // --- Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if(revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            } 
            // Optional: remove 'active' to animate again when scrolling up
            // else {
            //     reveal.classList.remove('active');
            // }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // --- Contact Form Prevent Default ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Typically send data here via fetch/axios
            alert('Thank you for reaching out! Your message has been sent. (Simulation)');
            contactForm.reset();
        });
    }

    // --- Typing Effect logic for "BTech CSE Student" replacement (Optional Enhancement) ---
    // Uncomment and implement full logic if deep dynamic typing is needed.
    // For now it's static in HTML, but structured well for future JS automation.
});
