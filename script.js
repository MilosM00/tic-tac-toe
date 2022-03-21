"use strict";

const buttonOne = document.querySelector(`.one`);
const buttonTwo = document.querySelector(`.two`);
const buttonThree = document.querySelector(`.three`);
const buttonFour = document.querySelector(`.four`);
const buttonFive = document.querySelector(`.five`);
const buttonSix = document.querySelector(`.six`);
const buttonSeven = document.querySelector(`.seven`);
const buttonEight = document.querySelector(`.eight`);
const buttonNine = document.querySelector(`.nine`);


const buttonPlayAgain = document.querySelector(`.play-again`);
const buttonNewGame = document.querySelector(`.new-game`);


const winnerPlayer = document.querySelector(`.winner-player`);
const playerScoreX = document.querySelector(`.player-x-score`);
const playerScoreO = document.querySelector(`.player-o-score`);


let player = true;
let playing = true;

let scoreX = 0;
let scoreO = 0;


buttonOne.addEventListener(`click`, () =>{
    if(playing){
    
        buttonOne.style.color = `black`;

        if(buttonOne.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonOne.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonOne.textContent = `x`;
        }
        
        else if(!player && playing){
            buttonOne.textContent = `o`;
        }

        player = !player;
        
        winO();
        winX();
    }
});

buttonTwo.addEventListener(`click`, () =>{
    if(playing){

        buttonTwo.style.color = `black`;

        if(buttonTwo.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonTwo.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonTwo.textContent = `x`;
        }

        else if(!player && playing){
            buttonTwo.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});

buttonThree.addEventListener(`click`, () =>{
    if(playing){

        buttonThree.style.color = `black`;

        if(buttonThree.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonThree.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonThree.textContent = `x`;
        }

        else if(!player && playing){
            buttonThree.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});

buttonFour.addEventListener(`click`, () =>{
    if(playing){

        buttonFour.style.color = `black`;

        if(buttonFour.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonFour.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonFour.textContent = `x`;
        }

        else if(!player && playing){
            buttonFour.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});

buttonFive.addEventListener(`click`, () =>{
    if(playing){

        buttonFive.style.color = `black`;

        if(buttonFive.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonFive.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonFive.textContent = `x`;
        }

        else if(!player && playing){
            buttonFive.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});

buttonSix.addEventListener(`click`, () =>{
    if(playing){

        buttonSix.style.color = `black`;

        if(buttonSix.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonSix.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonSix.textContent = `x`;
        }

        else if(!player && playing){
            buttonSix.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});

buttonSeven.addEventListener(`click`, () =>{
    if(playing){

        buttonSeven.style.color = `black`;

        if(buttonSeven.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonSeven.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonSeven.textContent = `x`;
        }

        else if(!player && playing){
            buttonSeven.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});

buttonEight.addEventListener(`click`, () =>{
    if(playing){

        buttonEight.style.color = `black`;

        if(buttonEight.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonEight.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonEight.textContent = `x`;
        }

        else if(!player && playing){
            buttonEight.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});

buttonNine.addEventListener(`click`, () =>{
    if(playing){

        buttonNine.style.color = `black`;

        if(buttonNine.textContent.includes(`x`)){
            return 0;
        }

        else if(buttonNine.textContent.includes(`o`)){
            return 0;
        }

        else if(player && playing){
            buttonNine.textContent = `x`;
        }

        else if(!player && playing){
            buttonNine.textContent = `o`;
        }

        player = !player;

        winO();
        winX();
    }
});


const winO = function (){
    if(buttonOne.textContent.includes(`o`) && buttonTwo.textContent.includes(`o`) && buttonThree.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`;
        scoreO++;
        playerScoreO.textContent = scoreO;
    }

    else if(buttonOne.textContent.includes(`o`) && buttonFour.textContent.includes(`o`) && buttonSeven.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`;
        scoreO++;
        playerScoreO.textContent = scoreO;  
    }

    else if(buttonSeven.textContent.includes(`o`) && buttonEight.textContent.includes(`o`) && buttonNine.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`;
        scoreO++;
        playerScoreO.textContent = scoreO;  
    }

    else if(buttonThree.textContent.includes(`o`) && buttonSix.textContent.includes(`o`) && buttonNine.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`; 
        scoreO++;
        playerScoreO.textContent = scoreO; 
    }

    else if(buttonFour.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonSix.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`; 
        scoreO++;
        playerScoreO.textContent = scoreO;
    }

    else if(buttonTwo.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonEight.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`;  
        scoreO++;
        playerScoreO.textContent = scoreO;
    }

    else if(buttonOne.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonNine.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`; 
        scoreO++;
        playerScoreO.textContent = scoreO; 
    }

    else if(buttonThree.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonSeven.textContent.includes(`o`)){
        playing = false;
        winnerPlayer.textContent = `Player o wins !`; 
        scoreO++;
        playerScoreO.textContent = scoreO; 
    }
     
};

const winX = function (){
    if(buttonOne.textContent.includes(`x`) && buttonTwo.textContent.includes(`x`) && buttonThree.textContent.includes(`x`)){
        playing = false;
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX;  
    }

    else if(buttonOne.textContent.includes(`x`) && buttonFour.textContent.includes(`x`) && buttonSeven.textContent.includes(`x`)){
        playing = false; 
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX; 
    }

    else if(buttonSeven.textContent.includes(`x`) && buttonEight.textContent.includes(`x`) && buttonNine.textContent.includes(`x`)){
        playing = false;
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX;  
    }

    else if(buttonThree.textContent.includes(`x`) && buttonSix.textContent.includes(`x`) && buttonNine.textContent.includes(`x`)){
        playing = false;
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX;  
    }

    else if(buttonFour.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonSix.textContent.includes(`x`)){
        playing = false;
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX;  
    }

    else if(buttonTwo.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonEight.textContent.includes(`x`)){
        playing = false;
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX;  
    }

    else if(buttonOne.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonNine.textContent.includes(`x`)){
        playing = false;
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX;  
    }

    else if(buttonThree.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonSeven.textContent.includes(`x`)){
        playing = false;
        winnerPlayer.textContent = `Player x wins !`;
        scoreX++;
        playerScoreX.textContent = scoreX;  
    }
     
};

buttonNewGame.addEventListener(`click`, () =>{
    buttonOne.textContent = `q`;
    buttonTwo.textContent = `q`;
    buttonThree.textContent = `q`;
    buttonFour.textContent = `q`;
    buttonFive.textContent = `q`;
    buttonSix.textContent = `q`;
    buttonSeven.textContent = `q`;
    buttonEight.textContent = `q`;
    buttonNine.textContent = `q`;

    buttonOne.style.color = `white`;
    buttonTwo.style.color = `white`;
    buttonThree.style.color = `white`;
    buttonFour.style.color = `white`;
    buttonFive.style.color = `white`;
    buttonSix.style.color = `white`;
    buttonSeven.style.color = `white`;
    buttonEight.style.color = `white`;
    buttonNine.style.color = `white`;

    playerScoreX.textContent = 0;
    playerScoreO.textContent = 0;

    winnerPlayer.textContent = `Who will win ?!`;

    playing = true;
    scoreO = 0;
    scoreX = 0;
});

buttonPlayAgain.addEventListener(`click`, () =>{
    buttonOne.textContent = `q`;
    buttonTwo.textContent = `q`;
    buttonThree.textContent = `q`;
    buttonFour.textContent = `q`;
    buttonFive.textContent = `q`;
    buttonSix.textContent = `q`;
    buttonSeven.textContent = `q`;
    buttonEight.textContent = `q`;
    buttonNine.textContent = `q`;

    buttonOne.style.color = `white`;
    buttonTwo.style.color = `white`;
    buttonThree.style.color = `white`;
    buttonFour.style.color = `white`;
    buttonFive.style.color = `white`;
    buttonSix.style.color = `white`;
    buttonSeven.style.color = `white`;
    buttonEight.style.color = `white`;
    buttonNine.style.color = `white`;

    winnerPlayer.textContent = `Who will win ?!`;

    playing = true;
});