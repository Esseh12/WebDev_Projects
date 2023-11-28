var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
let N = randomNumber1;

if (N === 1) {
    document.querySelector(".img1").src = "./images/dice1.png";
}
else if (N === 2) {
    document.querySelector(".img1").src = "./images/dice2.png";
}
else if (N === 3) {
    document.querySelector(".img1").src = "./images/dice3.png";
}
else if (N === 4) {
    document.querySelector(".img1").src = "./images/dice4.png";
}
else if (N === 5) {
    document.querySelector(".img1").src = "./images/dice5.png";
}
else {
    document.querySelector(".img1").src = "./images/dice6.png";
}



var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2= Math.floor(randomNumber2);
let i = randomNumber2;

if (i === 1) {
    document.querySelector(".img2").src = "./images/dice1.png";
}
else if (i === 2) {
    document.querySelector(".img2").src = "./images/dice2.png";
}
else if (i === 3) {
    document.querySelector(".img2").src = "./images/dice3.png";
}
else if (i === 4) {
    document.querySelector(".img2").src = "./images/dice4.png";
}
else if (i === 5) {
    document.querySelector(".img2").src = "./images/dice5.png";
}
else {
    document.querySelector(".img2").src = "./images/dice6.png";
}



if (N === i){
document.querySelector('h1').innerHTML = 'Draw!!!';
}

else if (N > i){
    document.querySelector('h1').innerHTML = 'Player 1 wins!!!';
    }

else if (N < i){
        document.querySelector('h1').innerHTML = 'Player 2 wins!!!';
}
