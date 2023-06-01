import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon, unreserveDragon } from '../../redux/dragons/Dragons';

const DragonElement = ({ id, name, description, flickrImages, reserved }) => {
  const dispatch = useDispatch();

  const reserveDragonHandler = () => {
    if (reserved) {
      dispatch(unreserveDragon(id));
    } else {
      dispatch(reserveDragon(id));
    }
  };

  const reservation = reserved ? 'Cancel Reservation' : 'Reserve Dragon';
  const btnClass = reserved ? 'grayBtn' : 'blueBtn';

  return (
    <div className="dragonEl">
      <div className="dragonImg">
        <img src={flickrImages} alt={description} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          {reserved && <span className="badge">Reserved</span>}
          {description}
        </p>
        <button className={btnClass} type="button" onClick={reserveDragonHandler}>
          {reservation}
        </button>
      </div>
    </div>
  );
};

DragonElement.defaultProps = {
  reserved: false,
};

DragonElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default DragonElement;
