function updateClock() {
  let now = new Date();
  let hour = now.getHours() % 12 || 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hour = String(hour).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.querySelector(".digital-clock").textContent = `${hour}:${minutes}:${seconds}`;


  //for clock hand
  const secondHand = seconds * 6;
  const minuteHand = (minutes * 6) + (seconds / 10);
  const hourHand = ((now.getHours() % 12) * 30) + (minutes / 2);

  document.querySelector(".second" ).style.transform = `rotate(${secondHand}deg)`;
  document.querySelector( ".minute").style.transform = `rotate(${minuteHand}deg)`;
  document.querySelector(".hour").style.transform = `rotate(${hourHand}deg)`;

  //update date also
  document.querySelector(".date").textContent = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

   function addNumber(){

  const clock = document.querySelector(".clock");

  for (let i = 1; i <= 12; i++) {
    const num = document.createElement("div");
    num.className = "clock-number";
    num.textContent = i

    const angle = (i-3) * 30
    const radius = 130
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    num.style.left = `calc(50% + ${x}px)`;
    num.style.top = `calc(50% + ${y}px)`

    clock.appendChild(num);
  }
}

document.addEventListener("DOMContentLoaded", function () {
    addNumber();
    updateClock();
    setInterval(updateClock, 1000);

})
