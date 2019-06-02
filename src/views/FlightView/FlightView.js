
import './FlightView.scss';
import React from 'react';
import { connect } from 'react-redux';

import loadingIcon from '../../assets/icons/travel.svg';

import { closeFlightView, setLoading } from '../../redux/actions/flight-info';
import { parseDateToRead, parseStringToDate } from '../../utils';

class FlightView extends React.Component {

  constructor() {
    super();
    this.predict = this.predict.bind(this);
  }

  predict() {
    console.log('Predict');
  }

  render() {
    const { flight, open, closeView, loading, setLoading } = this.props;
    if (open && flight) {
      let parsedDate = flight.date;
      try {
        parsedDate = parseDateToRead(parseStringToDate(flight.date));
      } catch (err) {
        console.warn(err);
      }
      return (
        <section className="flight-view">
          <div className="flight-view__header">
            <h2>Información de vuelo</h2>
            <button className="flight-view__close-button"
                    onClick={() => closeView()}><img src={require('../../assets/icons/close.svg')} alt="Close button" /></button>
          </div>

          <div className="flight-view__body">
            <div className="flight-view__sites-info">
              <div className="flight-view__site">
                <h3>{flight.from.city}</h3>
                <p>{flight.from.airport}</p>
              </div>
              <div className="flight-view__site-arrow"><img src={require('../../assets/icons/right-arrow.svg')} alt="Destination arrow" /></div>
              <div className="flight-view__site">
                <h3>{flight.to.city}</h3>
                <p>{flight.to.airport}</p>
              </div>
            </div>

            <div className="flight-view__info">
              <h3>Número de vuelo</h3>
              <p>{flight.id}</p>
            </div>

            <div className="flight-view__info">
              <h3>Fecha de salida</h3>
              <p>{parsedDate}</p>
            </div>

            <div className="flight-view__info">
              <h3>Puestos autorizados a vender</h3>
              <p>{flight.authorizedToSell}</p>
            </div>

            <div className="flight-view__info">
              <h3>Puestos vendidos</h3>
              <p>{flight.sold}</p>
            </div>

            {flight.prediction || loading ? (
              <div className="flight-view__info flight-view__info--no-show">
                {loading ? (
                  <div className="loading-view">
                    <img src={loadingIcon} className="loading-view__icon" alt="loading" />
                  </div>
                ) : (
                  <div>
                    <h3>No shows</h3>
                    <p>123</p>
                  </div>
                )}
              </div>
            ) : null}
          </div>

          <div className="flight-view__footer">
            <button className="flight-view__predict-button"
                    onClick={() => this.predict()}>
              Predecir No Show
            </button>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ flightInfo }) => ({
  flight: flightInfo.flight,
  loading: flightInfo.loading,
  open: flightInfo.open,
});
const mapDispatchToProps = dispatch => ({
  closeView: () => dispatch(closeFlightView()),
  setLoading: loading => dispatch(setLoading(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightView);
