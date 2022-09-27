document.getElementById("input1").addEventListener("click", displayInput1);

document.getElementById("input2").addEventListener("click", displayInput1);

document.getElementById("input3").addEventListener("click", displayInput1);


function displayInput1() {
let input1 
}


/*function  logSubmit() {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }*/


  const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
