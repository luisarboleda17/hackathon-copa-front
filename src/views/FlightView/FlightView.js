
import './FlightView.scss';
import React from 'react';
import { connect } from 'react-redux';

import { closeFlightView, openFlightView } from '../../redux/actions/flight-info';

class FlightView extends React.Component {
  render() {
    return (
      <section className="flight-view">
        Flight View
        <button onClick={() => this.props.closeView()}>Cerrar</button>
        <button onClick={() => this.props.openView()}>Abrir</button>
      </section>
    );
  }
}

const mapStateToProps = ({ flightInfo }) => ({
  flight: flightInfo.flight,
  loading: flightInfo.loading,
  open: flightInfo.open,
});
const mapDispatchToProps = dispatch => ({
  closeView: () => dispatch(closeFlightView()),
  openView: () => dispatch(openFlightView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightView);
