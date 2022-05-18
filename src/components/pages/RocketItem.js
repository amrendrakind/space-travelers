import React from 'react';
import PropTypes from 'prop-types';

function RocketItem(props) {
  const { rocket } = props;
  const {
    id, name, flickrImages, description,
  } = rocket;

  return (
    <li key={id}>
      <div className="image-container">
        <img src={flickrImages[0]} alt={name} />
      </div>
      <div className="content">
        <h3>
          {' '}
          {name}
        </h3>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
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
