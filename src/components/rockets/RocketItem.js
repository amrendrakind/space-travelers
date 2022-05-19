import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { rocketReservation, cancelRocketReservation } from '../../redux/rockets/rockets';

function RocketItem(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, name, flickrImages, description,
  } = rocket;
  const rocketBooking = () => {
    dispatch(rocketReservation(id));
  };

  const cancelRocketBooking = () => {
    dispatch(cancelRocketReservation(id));
  };

  return (
    <li key={id}>
      <div className="rocket">
        <div className="image-container">
          <img src={flickrImages[0]} alt={name} />
        </div>
        <div className="rocket-content">
          <h3 className="rocket-name">
            {name}
          </h3>
          {rocket.reserved ? <span>Reserved</span> : null}
          <p>{description}</p>
          {rocket.reserved ? <button type="button" onClick={cancelRocketBooking} className="cancel-reservation-button">Cancel Reservation</button> : <button className="reserve-rocket-button" type="button" onClick={rocketBooking}>Reserve Rocket</button>}
        </div>
      </div>
    </li>
  );
}

export default RocketItem;

RocketItem.propTypes = {
  rocket:
        PropTypes.objectOf(
          {
            id: PropTypes.number,
            name: PropTypes.string,
            types: PropTypes.string,
            flickrImages: PropTypes.array,
            description: PropTypes.string,
          },
        ).isRequired,
};
