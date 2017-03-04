function createCard(suit, value, connectedGame){

  var card = {
    suit: suit,
    value: value,
    connectedGame: connectedGame
  }

  card.getCardSuit = function() {
    return card.suit;
  }

  card.getCardValue = function() {
    return card.value;
  }

  card.setConnectedGame = function(game) {
    return card.connectedGame = game;
  }

  card.getConnectedGame = function(){
    return card.connectedGame;
  }

  return card;
}
