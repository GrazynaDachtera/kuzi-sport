function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}


document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "about/about.html";
});

<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
<script>
    (function(){
    emailjs.init("O7cFRHfbQC40hpcOT");
})();
</script>

<script>
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // your public key
    var publicKey = 'O7cFRHfbQC40hpcOT';

    // your service ID
    var serviceID = 'service_gb3ea08';

    // your template ID
    var templateID = 'template_iyma3le';

    emailjs.sendForm(serviceID, templateID, this, publicKey)
    .then(function() {
    console.log('Email successfully sent!');
})
    .catch(function(error) {
    console.error('Error occurred:', error);
});
});
</script>







