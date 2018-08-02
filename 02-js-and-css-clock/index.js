const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  let seconds = now.getSeconds();
  if (seconds === 0) secondHand.style.transition = "all 0s";
  if (seconds === 1) {
    secondHand.style.transition = "all 0.05s";
    secondHand.style["transition-timing-function"] =
      "cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `translateX(65%) rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
