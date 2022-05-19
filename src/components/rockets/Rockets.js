import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rocketFromAPI } from '../../redux/rockets/rockets';
import RocketItem from './RocketItem';
import './Rocket.css';

function Rockets() {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.Rockets);

  useEffect(() => {
    dispatch(rocketFromAPI());
  }, [dispatch]);

  return (
    <ul className="rocket-list-conatiner">
      {rocket.map((rocket) => (
        <RocketItem
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
}

export default Rockets;
