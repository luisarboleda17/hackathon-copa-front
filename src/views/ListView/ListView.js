
import './ListView.scss';
import React from 'react';
import { connect } from 'react-redux';

import { requestFlights, setLoading, requestPredictions } from '../../redux/actions/flights';
import {loadFlight, openFlightView, requestPrediction} from '../../redux/actions/flight-info';
import { parseStringToDate, parseDateToRead } from '../../utils';

class ListView extends React.Component {

  state = {
    selectedFlights: []
  };

  constructor() {
    super();
    this.openFlight = this.openFlight.bind(this);
    this.toggleFlightSelect = this.toggleFlightSelect.bind(this);
    this.predict = this.predict.bind(this);
  }

  componentDidMount() {
    this.props.requestFlights();
  }

  openFlight(flight) {
    this.props.loadFlight(flight);
    this.props.openFlightView();
  }

  toggleFlightSelect(flight) {

    if (this.state.selectedFlights.includes(flight['FLIGHT_NUMBER'])) {
      const findFlight = this.state.selectedFlights.findIndex(item => flight['FLIGHT_NUMBER'] === item);
      if (findFlight || findFlight === 0) {
        this.setState({
          selectedFlights: this.state.selectedFlights.filter((_, i) => i !== findFlight)
        });
      }
    } else {
      this.setState({
        selectedFlights: [
          ...(this.state.selectedFlights),
          flight['FLIGHT_NUMBER']
        ]
      });
    }
  }

  predict() {
    this.props.predict(this.props.flights.filter(flight => this.state.selectedFlights.includes(flight['FLIGHT_NUMBER'])));
  }

  render() {
    const { flights } = this.props;
      console.log('FLIGHTS', flights);
    return (
      <section className="flights-list">

          {this.state.selectedFlights.length > 0 ? (
              <div className="flights-list__toolbox">
                  <button className="flights-list__predict-button" onClick={() => this.predict()}>Predecir {this.state.selectedFlights.length} No Show</button>
              </div>
          ) : null}

        <div className="flights-list__flights">
          <div className="flights__header">
              <div className="flights__head flights__head--index">Indice</div>
            <div className="flights__head flights__head--date">Fecha de salida</div>
            <div className="flights__head flights__head--flight-number"># Vuelo</div>
            <div className="flights__head flights__head--sites">Origen / Destino</div>
            <div className="flights__head flights__head--selling">Autorizados a vender</div>
            <div className="flights__head flights__head--sold">Vendidos</div>
            <div className="flights__head flights__head--no-show">No Shows</div>
            <div className="flights__head flights__head--action">Acción</div>
          </div>
          <div className="flights__body">
            {
              flights.map((flight, index) => {
                const flightSelected = this.state.selectedFlights.includes(flight['FLIGHT_NUMBER']);
                let formatedDate = flight.date;
                try {
                  formatedDate = parseDateToRead(parseStringToDate(flight['DateYear'], flight['DateMonth'], flight['day']));
                } catch(err) {
                  console.warn(err);
                }
                return (
                  <div className={'flight ' + (flightSelected ? 'flight--selected' : null)} key={index}
                       onClick={() => this.toggleFlightSelect(flight)}>
                      <div className="flight__item flight__item--index">{flight.index}</div>
                    <div className="flight__item flight__item--date">{formatedDate}</div>
                    <div className="flight__item flight__item--flight-number">{flight['FLIGHT_NUMBER']}</div>
                    <div className="flight__item flight__item--sites">{flight['ORIGIN_ORIGIN']} <img className="connection-arrow" src={require('../../assets/icons/right-arrow.svg')} alt="Right Arrow"/> {flight['DESTINATION_ORIGIN']}</div>
                    <div className="flight__item flight__item--selling">{flight['TotalAuthorized']}</div>
                    <div className="flight__item flight__item--sold">{flight['TotalSeatSold']}</div>
                    <div className="flight__item flight__item--no-show">{flight.prediction || flight.prediction === 0 ? flight.prediction : ''}</div>
                    <div className="flight__item flight__item--action">
                      <button className="flight__open-button"
                              onClick={() => this.openFlight(flight)}>
                        <img src={require('../../assets/icons/eye.svg')} alt="Open Info"/>
                      </button>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ flights }) => ({
  flights: flights.flights,
  loading: flights.loading,
});
const mapDispatchToProps = dispatch => ({
  requestFlights: () => dispatch(requestFlights()),
  setLoading: () => dispatch(setLoading()),
  loadFlight: flight => dispatch(loadFlight(flight)),
  openFlightView: () => dispatch(openFlightView()),
    predict: data => dispatch(requestPredictions(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
