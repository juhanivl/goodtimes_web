import React from 'react';
import deck from './deck.js';

class PickGamesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfMiniGames: [],
      listOfPickedGames: []
    };
    this.addGame = this.addGame.bind(this);
    this.removeGame = this.removeGame.bind(this);
    this.prepareToGoToGame = this.prepareToGoToGame.bind(this);
  }

  componentDidMount(){
    //Create list of games (TEMP)
    let miniGameList = [];
    for (let i=0; i<17; i++){
      let miniGame = {
        name: "game_name_"+i ,
        description: "game_des_" + i+10
      };
      miniGameList.push(miniGame)
    }
    this.setState({
      listOfMiniGames: miniGameList
    })

  }

  //create pickedGameObject and add it to cloneOfListOfPickedGames (cloned from state) and update state
  addGame(game){
    if(this.state.listOfPickedGames.length < 13){
      console.log("addGame length" , this.state.listOfPickedGames.length);
      let cloneOfListOfPickedGames = this.state.listOfPickedGames;
      let pickedGameObject = {
        representingGameName: game.name,
        representingGameDescription: game.description
      };
      cloneOfListOfPickedGames.push(pickedGameObject);
      this.setState({
        listOfPickedGames: cloneOfListOfPickedGames
      });
    }
  }

  //cloneOfListOfPickedGames (from) state and get index of gameToBeRemoved from it.
  //splice cloneOfListOfPickedGames and update state
  removeGame(gameToBeRemoved){
    let cloneOfListOfPickedGames = this.state.listOfPickedGames;
    var index = cloneOfListOfPickedGames.indexOf(gameToBeRemoved);
    if (index > -1) {
      cloneOfListOfPickedGames.splice(index, 1);
    }
    this.setState({
      listOfPickedGames: cloneOfListOfPickedGames
    });
  }

  //temporary function
  prepareToGoToGame(){
    console.log("prepareToGoToGame: " , deck.gameDeck);

    for (let i = 0; i < this.state.listOfPickedGames.length; i++) {
      for (let j = 0; j < deck.gameDeck.cards.length; j++) {
        let value = i+2;
        if(deck.gameDeck.cards[j].value == value){
          deck.gameDeck.cards[j].setConnectedGame(this.state.listOfPickedGames[i]);
        }
      }
    }
    console.log("aaaand: " , deck.gameDeck);
  }

  render() {

    let listOfMiniGames = <div key="listOfMiniGames">loading...</div>
    let listOfPickedGames = <div key="listOfPickedGames">loading..</div>
    let toGameButton = <div>Pick 13 games to start the fun!</div>

    //todo: tee getDescription funktio ja sille nappi
    if(this.state.listOfMiniGames){
       listOfMiniGames = this.state.listOfMiniGames.map((game) =>
        <div  key={game.name}>
            game : {game.name + " "}
            description : {game.description + " "}
            <button key={game.name} onClick={() => this.addGame(game)}>+</button>
        </div>
      );
    }

    if(this.state.listOfPickedGames){
      listOfPickedGames = this.state.listOfPickedGames.map((gameAndCardCombo, index)=> {
        let cardName = index+2;
        if(cardName==11){cardName="Jack"}
        else if(cardName==12){cardName="Queen"}
        else if (cardName==13){cardName="King"}
        else if(cardName==14){cardName="Ace"}


          return (
            <div key={gameAndCardCombo.representingGameName+index}>
              {cardName}:
              {gameAndCardCombo.representingGameName}
              <button key={index} onClick={() => this.removeGame(gameAndCardCombo)}>Remove</button>
            </div>
          )
      })
    }

    if(this.state.listOfPickedGames.length == 13){
      toGameButton = <div>
                        Start game!
                        <button onClick={() =>  this.prepareToGoToGame()}>Start</button>
                      </div>
    }

    return (
      <div>
        Pick Games To Play
        <div>
          All games
          {listOfMiniGames}
        </div>

        <div>
          Picked Games
          {this.state.listOfPickedGames.length}/13
          {listOfPickedGames}
          {toGameButton}
        </div>

      </div>
    );
  }

}

export default PickGamesView;
