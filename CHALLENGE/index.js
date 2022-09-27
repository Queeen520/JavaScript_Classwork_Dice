// users will be asked to enter their names

const player1_Name = prompt("What's your Name");
const player2_Name = prompt("What's your Name");

// displays the input value in the header

function displayPlayers () {
    document.getElementById("player1").innerHTML = player1_Name;
    document.getElementById("player2").innerHTML = player2_Name;
}

displayPlayers();             // triggers the function


// onclick first button

function buttonOne () {

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let dice = document.getElementById("diceHere1");          // .setAttribute("class", "pStyle")
    dice.innerHTML = randomNumber;
};

buttonOne();

function buttonTwo () {

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let dice = document.getElementById("diceHere2");
    dice.innerHTML = randomNumber;
};

buttonTwo ();