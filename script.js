function menuOnClick() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    alert("Hello, world!");
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.elements.email.value;
    const message = form.elements.message.value;

    // Do something with the email and message data, such as sending it to a server
    console.log(`Email: ${email}, Message: ${message}`);

    form.reset();
});

