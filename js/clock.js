const clock = document.querySelector("#clock");
const date = new Date();


function setTime() {
    const date = new Date();
    const dateHours = String(date.getHours()).padStart(2, "0");
    const dateMinutes = String(date.getMinutes()).padStart(2, "0");
    const dateSeconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = dateHours + ":" + dateMinutes + ":" + dateSeconds;
}

setTime();
setInterval(setTime, 1000);