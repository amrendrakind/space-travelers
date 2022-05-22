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
  }, []);

  return (
    <section>
      <ul className="dragonsList">
        {dragonsList.map((dragon) => (
          <DragonElement
            key={dragon.dry_mass_kg}
            id={dragon.id}
            name={dragon.name}
            description={dragon.description}
            flickrImages={dragon.flickr_images[0]}
            reserved={dragon.reserved}
          />
        ))}
      </ul>
    </section>
  );
};

export default Dragons;
