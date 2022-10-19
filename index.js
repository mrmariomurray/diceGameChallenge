
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
//   creates max and min inclusive integers 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1, 6));

function diceRoll() {
    document.querySelector('.img1').setAttribute('src', 'images/dice' + getRandomInt() + '\.png');
}




