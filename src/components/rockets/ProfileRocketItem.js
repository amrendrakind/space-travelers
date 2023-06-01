import React from 'react';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import './Rocket.css';

const ProfileRocketItem = ({ rocket }) => {
  const { id, name } = rocket;

  return (
    <li className="profile-rocket-name">
      <h3>{name}</h3>
      <JoinButton rocket={rocket} />
    </li>
  );
};

ProfileRocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileRocketItem;
