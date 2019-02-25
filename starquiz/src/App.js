import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import GamePage from './Page/GamePage.jsx'
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<GamePage />
		</Provider>
    );
  }
}

export default App;
