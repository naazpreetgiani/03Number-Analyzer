//Number Analyzer
document.getElementById("analyze-btn").addEventListener("click", btnCliked);
outputE1 = document.getElementById("num-info");

function btnCliked() {
  //INPUT
  let num = document.getElementById("analyze-in").value;
  //PROCESS
  if (num % 2 == 0 && num > 0) {
    outputE1.innerHTML = ` <p class="sign">Positive / Negative / Zero: Positive</p>
    <p class="number">Even or Odd: Even</p>`;
  } else if (num % 2 == 0 && num < 0) {
    outputE1.innerHTML = `<p class="sign">Positive / Negative / Zero: Negative</p>
    <p class="number">Even or Odd: Even</p>`;
  } else if (num % 2 !== 0 && num > 0) {
    outputE1.innerHTML = `<p class="sign">Positive / Negative / Zero: Positive</p>
    <p class="number">Even or Odd: Odd</p>`;
  } else if (num % 2 !== 0 && num < 0) {
    outputE1.innerHTML = `<p class="sign">Positive / Negative / Zero: Negative</p>
    <p class="number">Even or Odd: Odd</p>`;
  } else {
    outputE1.innerHTML = `<p class="sign">Positive / Negative / Zero: Zero</p>
    <p class="number">Even or Odd: Even</p>`;
  }

  //OUTPUT
}
