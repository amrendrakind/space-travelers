import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { rocketReservation, cancelRocketReservation } from '../../redux/rockets/rockets';

const JoinButton = (props) => {
  const { rocket } = props;
  const { id, reserved } = rocket;

  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!reserved) {
      dispatch(rocketReservation(id));
    } else {
      dispatch(cancelRocketReservation(id));
    }
  };

  return (
    <Button
      onClick={clickHandler}
      type="button"
      variant={reserved ? 'outline-danger' : 'outline-primary'}
    >
      Cancel Reservation
    </Button>
  );
};

JoinButton.propTypes = {
  rocket:
        PropTypes.objectOf(
          {
            id: PropTypes.number,
            reserved: PropTypes.string,
          },
        ).isRequired,
};

export default JoinButton;
