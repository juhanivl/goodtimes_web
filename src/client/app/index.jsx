import React from 'react';
import {render} from 'react-dom';
import MainGameComponent from './components/MainGameComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <MainGameComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
