const btn = document.querySelector("#btn")
const h1 = document.querySelector("#heading")
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formError = document.getElementById("formError");
const box = document.querySelector("#box")

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
})
h1.onmouseover =  () => {
    h1.style.color = "green"
}
h1.onmouseout = function () {
    h1.style.color = "black";
};

document.addEventListener("keydown", function(event) {
      const output = document.getElementById("output");
      output.textContent = `You pressed: ${event.key}`;
    });

form.addEventListener("submit", function(e) {
    e.preventDefault();
    formError.textContent = ""; 
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
        formError.textContent = "All fields are required.";
        return;
    }
});
