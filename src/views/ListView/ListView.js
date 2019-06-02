
import './ListView.scss';
import React from 'react';
import { connect } from 'react-redux';

import { requestFlights, setLoading } from '../../redux/actions/flights';
import { loadFlight, openFlightView } from '../../redux/actions/flight-info';
import { parseStringToDate, parseDateToRead } from '../../utils';

class ListView extends React.Component {

  state = {
    selectedFlights: []
  };

  constructor() {
    super();
    this.openFlight = this.openFlight.bind(this);
    this.toggleFlightSelect = this.toggleFlightSelect.bind(this);
  }

  componentDidMount() {
    this.props.requestFlights();
  }

  openFlight(flight) {
    this.props.loadFlight(flight);
    this.props.openFlightView();
  }

  toggleFlightSelect(flight) {

    if (this.state.selectedFlights.includes(flight.id)) {
      const findFlight = this.state.selectedFlights.findIndex(item => flight.id === item);
      if (findFlight || findFlight === 0) {
        this.setState({
          selectedFlights: this.state.selectedFlights.filter((_, i) => i !== findFlight)
        });
      }
    } else {
      this.setState({
        selectedFlights: [
          ...(this.state.selectedFlights),
          flight.id
        ]
      });
    }
  }

  render() {
    const { flights } = this.props;
    return (
      <section className="flights-list">

        {this.state.selectedFlights.length > 0 ? (
          <div className="flights-list__toolbox">
            <button className="flights-list__predict-button">Predecir {this.state.selectedFlights.length} No Show</button>
          </div>
        ) : null}

        <div className="flights-list__flights">
          <div className="flights__header">
            <div className="flights__head flights__head--date">Fecha de salida</div>
            <div className="flights__head flights__head--flight-number"># Vuelo</div>
            <div className="flights__head flights__head--sites">Origen / Destino</div>
            <div className="flights__head flights__head--selling">Autorizados a vender</div>
            <div className="flights__head flights__head--sold">Vendidos</div>
            <div className="flights__head flights__head--action">Acción</div>
          </div>
          <div className="flights__body">
            {
              flights.map((flight, index) => {
                const flightSelected = this.state.selectedFlights.includes(flight.id);
                let formatedDate = flight.date;
                try {
                  formatedDate = parseDateToRead(parseStringToDate(flight.date));
                } catch(err) {
                  console.warn(err);
                }
                return (
                  <div className={'flight ' + (flightSelected ? 'flight--selected' : null)} key={index}
                       onClick={() => this.toggleFlightSelect(flight)}>
                    <div className="flight__item flight__item--date">{formatedDate}</div>
                    <div className="flight__item flight__item--flight-number">{flight.id}</div>
                    <div className="flight__item flight__item--sites">{flight.from.city} <img className="connection-arrow" src={require('../../assets/icons/right-arrow.svg')} alt="Right Arrow"/> {flight.to.city}</div>
                    <div className="flight__item flight__item--selling">{flight.authorizedToSell}</div>
                    <div className="flight__item flight__item--sold">{flight.sold}</div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
