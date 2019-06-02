
import './FlightView.scss';
import React from 'react';
import { connect } from 'react-redux';

import loadingIcon from '../../assets/icons/travel.svg';

import { closeFlightView, setLoading, requestPrediction } from '../../redux/actions/flight-info';
import { parseDateToRead, parseStringToDate } from '../../utils';

class FlightView extends React.Component {

  constructor() {
    super();
    this.predict = this.predict.bind(this);
  }

  predict() {
    this.props.predict(this.props.flight);
  }

  render() {
    const { flight, open, closeView, loading, setLoading, predict } = this.props;
    if (open && flight) {
      let parsedDate = flight.date;
      try {
        parsedDate = parseDateToRead(parseStringToDate(flight['DateYear'], flight['DateMonth'], flight['day']));
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
                <h3>{flight['ORIGIN_ORIGIN']}</h3>
                <p>{flight['Airport Origin_origin']}</p>
              </div>
              <div className="flight-view__site-arrow"><img src={require('../../assets/icons/right-arrow.svg')} alt="Destination arrow" /></div>
              <div className="flight-view__site">
                <h3>{flight['DESTINATION_ORIGIN']}</h3>
                <p>{flight['Airport DESTINATION_origin']}</p>
              </div>
            </div>

            <div className="flight-view__info">
              <h3>Número de vuelo</h3>
              <p>{flight['FLIGHT_NUMBER']}</p>
            </div>

            <div className="flight-view__info">
              <h3>Fecha de salida</h3>
              <p>{parsedDate}</p>
            </div>

            <div className="flight-view__info">
              <h3>Puestos autorizados a vender</h3>
              <p>{flight['TotalAuthorized']}</p>
            </div>

            <div className="flight-view__info">
              <h3>Puestos vendidos</h3>
              <p>{flight['TotalSeatSold']}</p>
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
                    <p>{flight.prediction}</p>
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
  predict: data => dispatch(requestPrediction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightView);
