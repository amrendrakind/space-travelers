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
