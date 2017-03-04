'use-strict'

function createCard(suit, value, connectedGame){

  var card = {
    suit: suit,
    value: value,
    connectedGame: connectedGame
  }

  card.getCardSuit = function() {return card.suit;}
  card.getCardValue = function() {return card.value;}
  card.setConnectedGame = function(game) {return card.connectedGame = game;}
  card.getConnectedGame = function(){return card.connectedGame;}

  return card;
}


var deck = {
  mixed: false,
  cards: []
}

var suits =["Spades", "Clubs", "Hearts", "Diamonds"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


suits.forEach(function(suit){
  values.forEach(function(value){
      var card =  createCard(suit, value, undefined)
      deck.cards.push(card)
  });
});

module.exports = {
    gameDeck: deck
}
