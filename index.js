
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
//   creates max and min inclusive integers 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNCTION TO ROLL DICE
function diceRoll() {
    const diceOne = document.querySelector('.img1').setAttribute('src', `images/dice${getRandomInt()}\.png`);
    const readDiceOne = document.querySelector('.img1').getAttribute('src');
    const readDiceOneSrc = readDiceOne.charAt(11);
    const diceOneSrcTypeChange = Number(readDiceOneSrc);

    // DICE TWO
    const diceTwo = document.querySelector('.img2').setAttribute('src', `images/dice${getRandomInt()}\.png`);
    const readDiceTwo = document.querySelector('.img2').getAttribute('src');
    const readDiceTwoSrc = readDiceTwo.charAt(11);
    const diceTwoSrcTypeChange = Number(readDiceTwoSrc);

    

    //NOTE: same as above not refactored >> 
    
    
    // FUNCTION TO CHANGE THE TITLE TEXT DYNAMICALLY
    if (diceOneSrcTypeChange === diceTwoSrcTypeChange) {
         document.querySelector('h1').textContent = 'Its a Draw';
    } else if (diceOneSrcTypeChange > diceTwoSrcTypeChange){
        document.querySelector('h1').textContent = 'Player One Wins'; 
    } else {
        document.querySelector('h1').textContent = 'Player Two Wins';
    }
    
}

// FUNCTION TO PLAY SOUND ON BUTTON CLICK
function diceAudio(url) {
  new Audio('sounds/diceRollSound.mp3').play();
}
// SIMPLIFYING THE DICE EVALUATION
// function diceRollBuild(a,b) {
//     const dob = getRandomInt();
//     const dtb = getRandomInt();
//     console.log(dob, dtb);

//     if (dob > dtb) {
//         console.log('Player One Wins');
//     } else {
//         console.log('keep playing');
//     }
// }
// console.log(diceRollBuild());

// NOTES
// 1. when using querySelector to select classes use ('.img') syntax not ('img'). If you use ('img') the code will break
// 2. document.querySelector('.img1').setAttribute('src', `images/dice${getRandomInt()}\.png`); IS document.querySelector('.img1').setAttribute('src', 'images/dice' + getRandomInt() + '\.png' REFACTORED

