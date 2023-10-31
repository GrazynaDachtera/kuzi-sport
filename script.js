function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}


document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "about/about.html";
});

window.onload = function () {
    // Load the EmailJS SDK script
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = function () {
        // Initialize EmailJS after the script has loaded
        var public_key = 'O7cFRHfbQC40hpcOT'
        emailjs.init(public_key);

        // Attach the event listener once EmailJS is ready
        var contactForm = document.getElementById('contact-form-for-email-kuzi')
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // these IDs from the previous steps
            var service_id = 'service_gb3ea08'
            var template_id = 'template_iyma3le'
            emailjs.sendForm(service_id, template_id, this)
                .then(function () {
                    console.log('SUCCESS!');
                    contactForm.reset();
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
    };

    // Append the EmailJS SDK script to the document
    document.head.appendChild(script);
};

const slider = document.getElementById('first-slider');
let currentSlide = 0;
const numSlides = slider.children.length;
const slideWidth = slider.offsetWidth;
let transitioning = false;

function goToSlide(slide) {
    if (transitioning) return;

    // Limit the range of currentSlide to ensure it stays within valid slide indices
    currentSlide = Math.min(Math.max(slide, 0), numSlides - 1);

    transitioning = true;
    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function nextSlide() {
    if (currentSlide < numSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

slider.addEventListener('transitionend', () => {
    transitioning = false;
});

// Initial slide position
goToSlide(0);










