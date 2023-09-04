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

const thumbnail1 = document.querySelector(".thumbnail1");
const fullSize1ImageURL = "../gallery/pictures/gimnastyka.JPG";

thumbnail1.addEventListener("click", function() {
    window.open(fullSize1ImageURL, "../gallery/pictures/gimnastyka.JPG");
});

const thumbnail2 = document.querySelector(".thumbnail2");
const fullSize2ImageURL = "pictures/BK6A3557.jpg";

thumbnail2.addEventListener("click", function() {
    window.open(fullSize2ImageURL, "pictures/BK6A3557.jpg");
});

const thumbnail3 = document.querySelector(".thumbnail3");
const fullSize3ImageURL = "pictures/BK6A3528.jpg";

thumbnail3.addEventListener("click", function() {
    window.open(fullSize3ImageURL, "pictures/BK6A3528.jpg");
});


