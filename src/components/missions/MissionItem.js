import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import JoinButton from './JoinButton';

const MissionItem = ({ mission }) => {
  const { mission_name, mission_description, wikipedia, isJoined } = mission;

  const renderBadge = () => {
    return isJoined ? (
      <Badge bg="success">Active Member</Badge>
    ) : (
      <Badge bg="secondary">Not a Member</Badge>
    );
  };

  return (
    <tr>
      <td>
        <h3>{mission_name}</h3>
      </td>
      <td>
        <p>{mission_description}</p>
        <a href={wikipedia} target="_blank" rel="noreferrer">
          Read more
        </a>
      </td>
      <td className="align-middle">{renderBadge()}</td>
      <td className="align-middle">
        <JoinButton isJoined={isJoined} id={mission.mission_id} />
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    mission_description: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    isJoined: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionItem;
