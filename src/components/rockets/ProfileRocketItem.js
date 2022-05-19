import PropTypes from 'prop-types';
import './Rocket.css';

const ProfileRocketItem = (props) => {
  const { rocket } = props;
  const { id, name } = rocket;

  return (
    <li
      key={id}
      className="profile-rocket-name"
    >
      <p>{name}</p>
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
