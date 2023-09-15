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

