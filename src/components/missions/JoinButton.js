import { useDispatch } from 'react-redux';
import { bool, string } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const JoinButton = (props) => {
  const { isJoined, id } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!isJoined) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  return (
    <Button
      onClick={clickHandler}
      type="button"
      variant={isJoined ? 'outline-danger' : 'outline-primary'}
    >
      {isJoined ? 'Leave ' : 'Join '}
      Mission
    </Button>
  );
};

JoinButton.propTypes = {
  isJoined: bool.isRequired,
  id: string.isRequired,
};

export default JoinButton;
