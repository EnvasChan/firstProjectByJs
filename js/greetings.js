const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");





function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerHTML = "처음 만나서 반가워요! " + username + "님";
    greeting.classList.remove("hidden");
    localStorage.setItem("username", username);


}

function handleLinkClick(event) {
    event.preventDefault();
    alert("clicked");
}

const savedUsername = localStorage.getItem("username");
const kerUsername = "username";

if (savedUsername === null) {
    loginForm.addEventListener('submit', onLoginSubmit);
}
else {
    const username = savedUsername;
    loginForm.classList.add("hidden");
    greeting.innerHTML = "또 뵙네요! " + username + "님";
    greeting.classList.remove("hidden");
}





