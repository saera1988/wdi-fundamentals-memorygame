




/*var cards = [
{
rank: 'queen',
suit:'hearts',	
cardImage:'images/queen-of-hearts.png'
},

{
rank: 'queen',
suit:'diamonds',
cardImage:'images/queen-of-diamonds.png'
},

{
rank: 'king',
suit:'hearts',
cardImage:'images/king-of-hearts.png'
},

{
rank: 'king',
suit:'diamonds',
cardImage:'images/king-of-diamonds.png'
}

];*/

var cards = ["queen","queen", "king", "king"];

var  cardsInPlay = new Array();



function checkForMatch()
{
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard (cardId)
{

	
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);




if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1] ){
  alert("You found a match!");
}else{alert("Sorry, try again.");} 
}


checkForMatch();
}

flipCard(cards[0]);
flipCard(cards[2]);