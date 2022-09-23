
var firstcard=getRandomCard()
var secondCard =getRandomCard()
cards=[firstcard,secondCard]
let hasBlackJack= false
let isAlive= true
let message=""
let sum=firstcard+secondCard
function getRandomCard(){
   
let x = Math.random()*12;

return parseInt(x);

}function getRandomCardOne(){
   
   let x = Math.random()*12;
   
   return parseInt(x);
   
   }
function startGame(){
   renderGame()
}
 function renderGame(){
   
     let messageEl=document.getElementById("message-el")  
     let cardEl=document.getElementById("cards")
     let sumEl=document.querySelector("#sum")
       
      cardEl.textContent= "Cards: " 
      for(i=0; i<cards.length; i++){
         cardEl.textContent += cards[i] +" "
         }
         
         
    sumEl.textContent=  "Sum:" + " " +sum 

   
     if(sum<21){
     message="Do you want to draw new card?"
     }
     else if(sum===21) {
        message="Wohoo! You've got Blackjack! "
        hasBlackJack=true
     }
     else{ 
        message="You're out of the game! "
        isAlive=false
      
    } 
   messageEl.textContent=message

 }
 function newCard(){
   var Card= getRandomCard()
   cards.push(Card)
   // cards+=cards+Card
   sum += Card
   renderGame()
 }
 let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)
 
