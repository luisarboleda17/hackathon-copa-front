
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';

import store from './redux';
import HomeView from './views/HomeView';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <HomeView/>
      </div>
    </Provider>
  );
}

export default App;
