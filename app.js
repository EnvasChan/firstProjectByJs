const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a")

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    console.log(event);
    loginForm.classList.add("hidden");
    if (username != "") {
        greeting.innerText = "만나서 반가워요! " + username;
        greeting.classList.remove("hidden");
    }
}

function handleLinkClick(event) {
    event.preventDefault();
    alert("clicked");
}
loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);


