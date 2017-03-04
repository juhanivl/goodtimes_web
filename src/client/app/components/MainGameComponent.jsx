import React from 'react';
import PickGamesView from './PickGamesView.jsx';
import PickPlayersView from './PickPlayersView.jsx';

class MainGameComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        MainGameComponent
        <PickGamesView/>
      </div>
    );
  }

}

export default MainGameComponent;
