function createPlayer(name){
  var testVariable = 2017;

  var player = {
    name: name,
    playedCards: []
  }

  calculateYearOfBirth = function(age) {
    var yearOfBirth = testVariable - age
    return yearOfBirth
  }

  player.getPlayerName = function() {
    return player.name;
  }

  player.addPlayerCard = function(playedCard){
    player.playedCards.push(playedCard);
    return player.playedCards;
  }

  player.getPlayedCards = function(){
    return player.playedCards;
  }

  return player;
}
