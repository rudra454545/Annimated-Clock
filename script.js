const strips = [...document.querySelectorAll(".strip")];
const numberSize = "8"; // in vmin

// Highlight number `d` on strip `strip` for 1 second
function highlight(strip, d) {
  strips[strip]
    .querySelector(`.number:nth-of-type(${d + 1})`)
    .classList.add("pop");

  setTimeout(() => {
    strips[strip]
      .querySelector(`.number:nth-of-type(${d + 1})`)
      .classList.remove("pop");
  }, 950); // causes ticking effect
}

// Slide the given strip pair (tens and units) to show the number
function stripSlider(strip, number) {
  let d1 = Math.floor(number / 10); // tens digit
  let d2 = number % 10;             // units digit

  strips[strip].style.transform = `translateY(${d1 * -numberSize}vmin)`;
  highlight(strip, d1);

  strips[strip + 1].style.transform = `translateY(${d2 * -numberSize}vmin)`;
  highlight(strip + 1, d2);
}

// Update the clock every second
setInterval(() => {
  const time = new Date();

  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();

  // Update each unit
  stripSlider(0, hours);
  stripSlider(2, mins);
  stripSlider(4, secs);
}, 1000);