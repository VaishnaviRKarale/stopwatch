const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");

let seconds = 0;
let minutes = 0;
let validate = false;
secondsElement.textContent = String(seconds).padStart(2, "0");

let flag;
function startTimer() {
  if (!validate) {
    validate=true;
    flag = setInterval(() => {
      seconds++;
      secondsElement.textContent = String(seconds).padStart(2, "0");
      if (seconds == 60) {
        minutes++;
        seconds = 0;
        minutesElement.textContent = String(minutes).padStart(2, "0");
      }
    }, 1000);
  }
  else{
    return null;
  }
}

function stopTimer() {
  validate = false;
  clearInterval(flag);
}
