
import './HomeView.scss';
import React from 'react';

import ListView from '../ListView/ListView';
import FlightView from '../FlightView/FlightView';

class HomeView extends React.Component {
  render() {
    return (
      <div className="home">
        <header>
          <h1>Copa Airlines</h1>
        </header>

        <section className="home__flights">
          <ListView/>
        </section>

        <FlightView/>
      </div>
    );
  }
}

export default HomeView;


/**
 * <section className="home__flight-info">
 <FlightView/>
 </section>
 */
