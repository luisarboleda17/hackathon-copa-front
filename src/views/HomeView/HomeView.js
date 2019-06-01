
import './HomeView.scss';
import React from 'react';

import ListView from '../ListView/ListView';
import FlightView from '../FlightView/FlightView';

class HomeView extends React.Component {
  render() {
    return (
      <div className="home-view">
        <header>
          <h1>Copa Airlines</h1>
        </header>
        <ListView/>
        <FlightView/>
      </div>
    );
  }
}

export default HomeView;
