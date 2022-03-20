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

let player = true;
let playing = true;

buttonOne.addEventListener(`click`, () =>{

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
});

buttonTwo.addEventListener(`click`, () =>{

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
});

buttonThree.addEventListener(`click`, () =>{

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
});

buttonFour.addEventListener(`click`, () =>{

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
});

buttonFive.addEventListener(`click`, () =>{

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
});

buttonSix.addEventListener(`click`, () =>{

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
});

buttonSeven.addEventListener(`click`, () =>{

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
});

buttonEight.addEventListener(`click`, () =>{

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
});

buttonNine.addEventListener(`click`, () =>{

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
});

const winO = function (){
    if(buttonOne.textContent.includes(`o`) && buttonTwo.textContent.includes(`o`) && buttonThree.textContent.includes(`o`)){
        console.log(`WIN`);
        playing = false; 
    }

    else if(buttonOne.textContent.includes(`o`) && buttonFour.textContent.includes(`o`) && buttonSeven.textContent.includes(`o`)){
        console.log(`WIN2`);
        playing = false; 
    }

    else if(buttonSeven.textContent.includes(`o`) && buttonEight.textContent.includes(`o`) && buttonNine.textContent.includes(`o`)){
        console.log(`WIN3`);
        playing = false; 
    }

    else if(buttonThree.textContent.includes(`o`) && buttonSix.textContent.includes(`o`) && buttonNine.textContent.includes(`o`)){
        console.log(`WIN4`);
        playing = false; 
    }

    else if(buttonFour.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonSix.textContent.includes(`o`)){
        console.log(`WIN5`);
        playing = false; 
    }

    else if(buttonTwo.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonEight.textContent.includes(`o`)){
        console.log(`WIN6`);
        playing = false; 
    }

    else if(buttonOne.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonNine.textContent.includes(`o`)){
        console.log(`WIN7`);
        playing = false; 
    }

    else if(buttonThree.textContent.includes(`o`) && buttonFive.textContent.includes(`o`) && buttonSeven.textContent.includes(`o`)){
        console.log(`WIN8`);
        playing = false; 
    }
     
};

const winX = function (){
    if(buttonOne.textContent.includes(`x`) && buttonTwo.textContent.includes(`x`) && buttonThree.textContent.includes(`x`)){
        console.log(`WIN`);
        playing = false; 
    }

    else if(buttonOne.textContent.includes(`x`) && buttonFour.textContent.includes(`x`) && buttonSeven.textContent.includes(`x`)){
        console.log(`WIN2`);
        playing = false; 
    }

    else if(buttonSeven.textContent.includes(`x`) && buttonEight.textContent.includes(`x`) && buttonNine.textContent.includes(`x`)){
        console.log(`WIN3`);
        playing = false; 
    }

    else if(buttonThree.textContent.includes(`x`) && buttonSix.textContent.includes(`x`) && buttonNine.textContent.includes(`x`)){
        console.log(`WIN4`);
        playing = false; 
    }

    else if(buttonFour.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonSix.textContent.includes(`x`)){
        console.log(`WIN5`);
        playing = false; 
    }

    else if(buttonTwo.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonEight.textContent.includes(`x`)){
        console.log(`WIN6`);
        playing = false; 
    }

    else if(buttonOne.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonNine.textContent.includes(`x`)){
        console.log(`WIN7`);
        playing = false; 
    }

    else if(buttonThree.textContent.includes(`x`) && buttonFive.textContent.includes(`x`) && buttonSeven.textContent.includes(`x`)){
        console.log(`WIN8`);
        playing = false; 
    }
     
};