document.addEventListener('keyup',handleKeySeatButtonPress);

function handleKeySeatButtonPress(){
    console.log('button pressed');
}
 function continueBook(){
    //step1:Generate a random seat
    const seat=getARandomSeat();
    console.log('your random seat',seat);

    const currentSeatPriceElement=document.getElementById('current-seatPrice');
    currentSeatPriceElement.innerText=seat;

 }

 function handleKeySeatUpEvent(event){
    //console.log('button pressed');

    //get the expected press 
    const currentSeatPriceElement=document.getElementById('current-seatPrice');
    const currentSeatPrice=currentSeatPriceElement;
    const totalPrice=currentSeatPrice.toLowerCase();
    console.log(grandTotal,totalPrice);
 }

 //check match or not

 if(grandPrice===etotalPrice){
    console.log('you get a point');
 }
 else{
    console.log('you missed. you lost a life');
 }

 function handleKeySeatUpEvent(event){
    const grandPrice=event.key;
    console.log(event.key);

 }

 //key player is expected to press
 const currentSeatPriceElement=document.getElementById('current-seatPrice');
 const currentSeatPrice=currentSeatPriceElement.innerText;
 const totalPrice=currentSeat.toLowerCase();

 //check right or wrong key

 if(grandPrice===totalPrice){
    console.log('you got your ticket');
    console.log('you have pressed currently');
    removeBackgroundColorById(totalPrice);
    continueBook();

    const CurrentSeatLeft=getTextElementById('current-seatLeft');
    console.log('current-seatLeft');

    const currentSeat=getTextElementValueById('current-seat');
    const updatedSeat=currentSeat-1;
    setTextElementValueById('current-seat',updatedSeat);


    //get a current seat
    const currentSeatLeftElement=document.getElementById('current-seat');
    const currentSeatLeftText=currentSeatLeftElement.innerText;
    const currentSeatLeft=parseInt(currentSeatLeftElement.innerText);
    console.log(currentSeatLeft);

    //2.increase the score by 1
    const newSeat=currentSeatLeft-1;

    //3. show the update the score

    currentSeatLeftElement.innerText=new seat;
 }
 else{
    console.log('try again');
    //step1: get the current life number
    const currentSeatElement=document.getElementById('current-Seat');
    const currentSeatText=currentSeatElement.innerText;
    const currentSeat=parseInt(currentSeatText);

    //step2: reduce the life number
    const newSeat=currentSeat=1;

    //step3: display the updated life count

    currentSeatElement.innerText=new SeatLife;
}

 

function play(){
   hideElementById();
   showElementById();
   continueGame();
}