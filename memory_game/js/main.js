console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo ="king";
var cardThree = "";
var cardFour = "";*/

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

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

/*function checkForMatch()
{
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard ()
{
    this.getAttribute('attribute-we-want-to-get-goes-here');

    cards[cardId];
	console.log("User flipped" +""+cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped" +""+ cards[cardId].cardImage);
	console.log("User flipped" +""+ cards[cardId].suit);

	checkForMatch ();
	
	function createBoard() {

	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('img');
    cardElement.setAttribute('attributeName', 'attributeValue');
    cardElement.setAttribute('data-id', '');
cardElement.addEventListener("click", flipCard());
createBoard.appendChild(cardElement);
}
	}

console.log(cards[cardId].cardImage);
this.setAttribute(src, cardImage)*/


	var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");


if (cardsInPlay.length === 2) 
{
	if (cardsInPlay[0] === cardsInPlay[1] )
{
  alert("You found a match!");
    // condition is true
}
else
{
    alert("Sorry, try again.");
    // condition is false
}

}

/*}

createBoard();
*/
