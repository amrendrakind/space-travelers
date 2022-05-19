import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import JoinButton from './JoinButton';

const MissionItem = (props) => {
  const { mission } = props;
  const rederingBage = () => {
    if (mission.isJoined) {
      return <Badge bg="success">Active Member</Badge>;
    }
    return <Badge bg="secondary">Not a Member</Badge>;
  };

  return (
    <tr>
      <th>
        <h3>{mission.mission_name}</h3>
      </th>
      <th>
        <p>{mission.mission_description}</p>
        <a
          href={mission.wikipedia}
          target="_blank"
          rel="noreferrer"
        >
          Read more
        </a>
      </th>
      <th className="align-middle">{rederingBage()}</th>
      <th className="align-middle">
        <JoinButton isJoined={mission.isJoined} id={mission.mission_id} />
      </th>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    mission_description: PropTypes.string,
    wikipedia: PropTypes.string,
    isJoined: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
