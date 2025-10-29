const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");

let seconds = 0;
let minutes = 0;
secondsElement.textContent = String(seconds).padStart(2,"0");

let flag;
function startTimer() {
   flag = setInterval(() => {
    seconds++;
    secondsElement.textContent = String(seconds).padStart(2,"0");
    if (seconds == 60) {
      minutes++;
      seconds = 0;
      minutesElement.textContent = String(minutes).padStart(2,"0");
    }
  }, 1000);
}

function stopTimer() {
    clearInterval(flag);
}
