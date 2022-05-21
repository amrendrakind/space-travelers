import React, { useEffect } from 'react';
import './dragon-profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons } from '../../redux/dragons/Dragons';
import JoinButton from './JoinButton';

const Profile = () => {
  const dispatch = useDispatch();
  const dragonsList = useSelector((store) => store.dragons);
  const myDragons = dragonsList.filter((dragon) => dragon.reserved === true);
  useEffect(() => {
    dispatch(getDragons());
  }, []);

  return (
    <section className="profile">
      <div className="profDragons">
        <h2>My Dragons</h2>
        <ul className="my">
          {myDragons.map((dragon) => (
            <div className="MyReserved" key={dragon.id}>
              <h3>{dragon.name}</h3>
              <JoinButton dragon={dragon} />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
