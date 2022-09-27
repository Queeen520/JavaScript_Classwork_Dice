// users will be asked to enter their names

const player1_Name = prompt("What's your Name");
const player2_Name = prompt("What's your Name");

// displays the input value in the header

function displayPlayers () {
    document.getElementById("player1").innerHTML = player1_Name;
    document.getElementById("player2").innerHTML = player2_Name;
}

displayPlayers();            


let counter = 10;
let player1 = 0;
let player2 = 0;

// onclick first button

function buttonOne () {

    player1 += Math.floor(Math.random() * 6) + 1;

    let dice = document.getElementById("diceHere1");          // .setAttribute("class", "pStyle")
    dice.innerHTML = player1;

    players();
};


// onclick second button

function buttonTwo () {

    player2 += Math.floor(Math.random() * 6) + 1;

    let dice = document.getElementById("diceHere2");
    dice.innerHTML = player2;

    players();

};


function players () {

    if (counter%2 == 0) {
    
        console.log("player1"); 

        counter--; 


    document.getElementsByClassName("buttonPlayer1")[0].style.display = "block"; 
    document.getElementsByClassName("buttonPlayer2")[0].style.display = "none";
   
    
    }
    

    else {

    console.log("player2");

    counter--;

    document.getElementsByClassName("buttonPlayer1")[0].style.display = "none";
    document.getElementsByClassName("buttonPlayer2")[0].style.display = "block"; 


    };

    console.log(counter);


    if (counter === 0) {

        if (player1 > player2) {

            alert("Player 1 WON! with " + player1 + " points");
        }

        else {
            alert("Player 2 WON! with " + player2 + " points");

        }

    }
    
    /* if (counter === 9) {

        document.getElementsByClassName("buttonPlayer1")[0].style.display = "none";
        document.getElementsByClassName("buttonPlayer2")[0].style.display = "none";

    } */
    

};

players();



