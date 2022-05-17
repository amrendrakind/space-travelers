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
