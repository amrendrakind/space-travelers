import { useSelector } from 'react-redux';
import './Rocket.css';
import React from 'react';
import ProfileRocketItem from './ProfileRocketItem';

const ProfileRocket = () => {
  let status = null;
  const rocket = useSelector((state) => state.Rockets);
  const filteredRocket = rocket.filter((rocket) => rocket.reserved === true);
  if (!filteredRocket.length) { status = 'No Rockets reserved'; }
  return (
    <>
      <div className="profile-rocket-container">
        <h2>My Rockets</h2>
        <ul className="profile-rocket-list-conatiner">

          {status
            ? <div className="status">{status}</div> : (filteredRocket.map((rocket) => (
              <ProfileRocketItem
                key={rocket.id}
                rocket={rocket}
              />
            )))}
        </ul>
      </div>
    </>
  );
};

export default ProfileRocket;
