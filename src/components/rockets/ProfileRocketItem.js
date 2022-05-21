import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import './Rocket.css';

const ProfileRocketItem = (props) => {
  const { rocket } = props;
  const { id, name } = rocket;

  return (
    <li
      key={id}
      className="profile-rocket-name"
    >
      <h3>{name}</h3>
      <JoinButton rocket={rocket} />
    </li>
  );
};

export default ProfileRocketItem;

ProfileRocketItem.propTypes = {
  rocket:
        PropTypes.objectOf(
          {
            id: PropTypes.number,
            name: PropTypes.string,
          },
        ).isRequired,
};
