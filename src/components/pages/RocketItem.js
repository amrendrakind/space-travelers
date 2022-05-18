import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

function RocketItem(props) {
  const { rocket } = props;
  const {
    id, name, flickrImages, description,
  } = rocket;

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
          <p>{description}</p>
          <button className="reserve-rocket-button" type="button">Reserve Rocket</button>
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
