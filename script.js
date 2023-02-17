
//var function for dealer/player
var dealerSum = 0;
var yourSum = 0;


var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

//allows player to draw
var canHit = true;

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}
//Creating Standardize Deck
function buildDeck() {
    let values = ["A","2", "3", "4", "5", "6","7","8","9","10", "J", "Q", "K"];
    let types = ["Hearts", "Spades", "Clubs", "Diamonds"];
    deck = [];

    for (let i = 0; i < types.length; i++){
        for (let j= 0; j < values.length; j++){
                deck.push(values[j] + "-" + types[i]);
        }

    }
    console.log(deck);
}
//Calling function to shuffle deck at random
function shuffleDeck(){
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random()  * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}
//Creating hidden card function
function startGame(){
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    //console.log(hidden);
    //console.log(dealerSum);
while (dealerSum < 17) {
        //<img src= "Assets/4 hearts.png"></img>
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "/PNG-carfd-1.3/"+ card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
}
    console.log(dealerSum);
}
//adding Value to the cards
function getValue(card){
    let data = card.split("-");
    let value = data[0];

    if(isNaN(value)){
    if (value == "A"){
        return 11;
        }
        return 10;
     }

    return parseInt(value);
}

function checkAce(card){
    if(card[0] == "A"){
        return 1;
    }
    return 0;
}