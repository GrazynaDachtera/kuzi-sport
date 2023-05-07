function menuOnClick() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    alert("Hello, world!");
});
