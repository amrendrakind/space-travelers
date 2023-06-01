import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as DragonsActions from '../../redux/dragons/Dragons';

const DragonElement = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, flickrImages, reserved,
  } = props;

  DragonElement.defaultProps = {  // Modifying defaultProps inside the component is not recommended
    reserved: false,
  };

  const reserveDragonHandler = (e) => {
    if (props.reserved) {  // Accessing props directly in the handler is not efficient
      dispatch(DragonsActions.unreserveDragon(e.target.id));
    } else {
      dispatch(DragonsActions.reserveDragon(e.target.id));
    }
  };

  const reservation = props.reserved ? 'Cancel Reservation' : 'Reserve Dragon';  // Accessing props directly
  const btnClass = props.reserved ? 'grayBtn' : 'blueBtn';  // Accessing props directly

  return (
    <div className="dragonEl">
      <div className="dragonImg">
        <img src={flickrImages} alt={description} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          {props.reserved && <span className="badge">Reserved</span>}  {/* Using unnecessary parentheses */}
          {description}
        </p>
        <button className={btnClass} type="button" id={id} onClick={reserveDragonHandler}>
          {reservation}
        </button>
      </div>
    </div>
  );
};

DragonElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default DragonElement;
