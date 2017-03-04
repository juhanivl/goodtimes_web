//deck
var myDeck = createDeck();
console.log("myDeck:" , myDeck);

//create mainGame object
var myMainGame = createMainGame(myDeck);

//add players to game
var myPlayer = createPlayer("juhani");
var otherPlayer = createPlayer("Mikael");
var listOfPlayers = [myPlayer, otherPlayer];
myMainGame.addPlayers(listOfPlayers)


//add picked game to mainGame
var tempPickedGames = ["juo 1", "juo 2", "juo 3", "määrää 1", "määrää 2", "määrää 3", "totuus/tehtävä", "en ole koskaan","kuningasjuoma", "vesiputous", "tytöt juo", "pojat juo", "biisi"];

myMainGame.addPickedGame();


//test log
console.log("myMainGame" , myMainGame);
