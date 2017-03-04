function createMainGame(mainGameDeck){

  var mainGame = {
    deck: mainGameDeck,
    players: [],
  }

  findAllCardsWithTheValue = function(value , pickedGame) {
    mainGame.deck.cards.forEach(function(card){
      if(card.value == value){
        card.connectedGame = pickedGame;
      }
    });
  }

  mainGame.addPlayers = function(players) {
    mainGame.players = players;
    return mainGame
  }

  mainGame.addPickedGame = function(){

    findAllCardsWithTheValue(2, "helloworld")
    /*
    var cardGameObject = {
      [mainGame.listOfCardsAndGames.length]: pickedGame
    }
    mainGame.listOfCardsAndGames.push(cardGameObject)
    */
  }

  return mainGame;
}
