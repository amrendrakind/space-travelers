import React from 'react';
import { useSelector } from 'react-redux';
import JoinButton from './JoinButton';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.missions);
  const filteredMissions = missions.filter((mission) => mission.isJoined);

  const renderList = () => {
    if (filteredMissions.length > 0) {
      return filteredMissions.map((mission) => {
        const { mission_id, mission_name, wikipedia, isJoined } = mission;

        return (
          <li key={mission_id} className="Li">
            <p className="paragraph">
              {mission_name} —{' '}
              <a href={wikipedia} target="_blank" rel="noreferrer" className="details">
                Read more
              </a>
            </p>
            <JoinButton isJoined={isJoined} id={mission_id} />
          </li>
        );
      });
    }
    return <li className="not-joined">No missions joined</li>;
  };

  return (
    <div className="wrapper">
      <h2 className="my-missions">My Missions</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default ProfileMissions;
