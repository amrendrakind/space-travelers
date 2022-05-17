import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/dragons/dragon';
//import DragonElement from './DragonElement';
//import './dragons.css';

const Rockets = () => {
	const dispatch = useDispatch();
	const dragonsList = useSelector((store) => store.dragons);
	useEffect(() => {
	  dispatch(getDragons());
	}, []);

	return (
		<section>
		  <ul className="dragonsList">
			{dragonsList.map((dragon) => (
			  <DragonsElement
				key={dragon.dragon_id}
				id={dragon.dragon_id}
				name={dragon.dragon_name}
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
