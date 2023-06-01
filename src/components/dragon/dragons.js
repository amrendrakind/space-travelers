import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons } from '../../redux/dragons/Dragons';
import DragonElement from './DragonElement';
import './dragons.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsList = useSelector((store) => store.dragons);

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  return (
    <section>
      <ul className="dragonsList">
        {dragonsList.map((dragon) => {
          const {
            id, name, description, flickr_images, reserved,
          } = dragon;

          return (
            <DragonElement
              key={id}
              id={id}
              name={name}
              description={description}
              flickrImages={flickr_images[0]}
              reserved={reserved}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Dragons;
