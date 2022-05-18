import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragons, unreserveDragons } from '../redux/dragons/dragon';

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
			dispatch(unreserveDragons(e.target.id));
		} else {
			dispatch(reserveDragons(e.target.id));
		}
	};
	const reservation = reserved ? 'Cancel Reservation' : 'Reserve Dragon';
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

DragonElement.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	reserved: PropTypes.bool,
	description: PropTypes.string.isRequired,
	flickrImages: PropTypes.string.isRequired,
};

export default DragonElement;
