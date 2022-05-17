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
