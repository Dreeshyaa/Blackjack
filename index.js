
let sum=0
let isAlive= false
let hasBlackJack= false
let message=""
let player={
    name: "Per",
    chips: 145

}

let playerEl = document.querySelector("#player-el")
   playerEl.textContent = player.name+": $"+ player.chips
function getRandomCardOne(){
   
let x = Math.random()*11+1;

return parseInt(x);

}
function getRandomCard(){
   
   let x = Math.floor(Math.random()*13)+1;
   if (x==11 || x==12||x==13){
      //console.log(x)
      return 10
   }
   else if(x==1){

    //  console.log(sum+11)
      if(sum+11>21){
         x=1
         console.log(1)
         return x
         
      }
      else{
         x=11
         console.log(11)
         return x
      }
     
   }
   else{
      return x
   }
   
   
   }
function startGame(){
   
var firstcard=getRandomCard()
var secondCard =getRandomCard()
cards=[firstcard,secondCard]
sum =firstcard + secondCard
isAlive= true


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
         
         
    sumEl.textContent=  "Sum:" + " " + sum 

   
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
   if(hasBlackJack==false && isAlive==true){
   var card= getRandomCard()
   sum += card
   cards.push(card)
   // cards+=cards+Card
   renderGame()
   }
   else{
      return
   }
 }
//  let airbnb={
//    available: true,
//    location: "ktm",
//    price: 12000,
//    example: ["welcome to our hotel", "airbnb"],
//    sayHello: function(){
//       console.log("Heisann!")
//    }
//  }
// airbnb.sayHello()
//  console.log(airbnb.available)
//  console.log(airbnb.example)
