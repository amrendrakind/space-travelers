import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon, unreserveDragon } from '../redux/dragons/dragon';

const DragonElement = (props) => {
	const dispatch = useDispatch();
	const {
	  id, name, dragon_type, flickrImages, reserved,
	} = props;

	DragonElement.defaultProps = {
	  reserved: false,
	};

	const reserveDragonHandler = (e) => {
		if (reserved) {
		  dispatch(unreserveDragon(e.target.id));
		} else {
		  dispatch(reserveDragon(e.target.id));
		}
	  };
	  const reservation = reserved ? 'Cancel Reservation' : 'Reserve Rocket';
	  const btnClass = reserved ? 'grayBtn' : 'blueBtn';
	  return (
		<div className="DragonEl">
		  <div className="dragonImg">
			<img src={flickrImages} alt={dragon_type} />
		  </div>
		  <div>
			<h2>{name}</h2>
			<p>
			  {(reserved) && (<span className="badge">Reserved</span>)}
			  {dragon_type}
			</p>
			<button className={btnClass} type="button" id={id} onClick={reserveDragonHandler}>{reservation}</button>
		  </div>
		</div>
	  );
	};
