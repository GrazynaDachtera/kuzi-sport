function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "about/about.html";
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.elements.email.value;
    const message = form.elements.message.value;

    console.log(`Email: ${email}, Message: ${message}`);

    form.reset();
});

<!--Module schedule by Idancesoft.com-->
<div id='idancesoft_schedule'></div>
<script>make_module('schedule', 1000017051, '1564', '', 'undefined', 'undefined', 'undefined', 'idancesoft_schedule') ;</script>
