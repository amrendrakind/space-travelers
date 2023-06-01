import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { reserveDragon, unreserveDragon } from '../../redux/dragons/Dragons';

const JoinButton = ({ dragon }) => {
  const { id, reserved } = dragon;
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!reserved) {
      dispatch(reserveDragon(id));
    } else {
      dispatch(unreserveDragon(id));
    }
  };

  const variant = reserved ? 'outline-danger' : 'outline-primary';
  const buttonContent = reserved ? 'Cancel Reservation' : 'Reserve Dragon';

  return (
    <Button onClick={clickHandler} type="button" variant={variant}>
      {buttonContent}
    </Button>
  );
};

JoinButton.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default JoinButton;
