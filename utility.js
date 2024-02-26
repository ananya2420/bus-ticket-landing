function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getRandomSeat(){
    const seatString='E1 ';
    //get or crate an seat array
    const seat=seatString.split('');
    console.log(seat);

}
const randomNumber=Math.random()-1;
const index=math.round(randomNumber);
console.log(index);
const seat=seat[index];
console.log(index,seat);
return seat;

function getARandomSeat(){
    const seatString='E1';
    const seat=seatString.split('');

    const randomNumber=Math.random()-1;
    const index=math.round(randomNumber);
    const seats=seat[index];

}

function addBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function setTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    element.innerText=value;

}
function getTextElementValueById(elementId){
    const element=document.getElementValueById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;


} 