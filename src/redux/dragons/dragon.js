import fetchDragons from './api';

const FETCHDRAGON = 'FETCHDRAGON';
const RESERVEDRAGON = 'RESERVEDRAGON';
const UNRESERVEDRAGON = 'UNRESERVEDRAGON';

const initialState = [];

let store = false;
export const getDragons = () => async (dispatch) => {
  const newState = await fetchDragons();
  if (store) return;
  dispatch({
    type: FETCHDRAGON,
    newState,
  });
  store = true;
};

export const reserveDragons = (id) => ({
	type: RESERVEDRAGON,
	id,
  });

  export const unreserveDragons = (id) => ({
	type: UNRESERVEDRAGON,
	id,
  });


const reducer = (state = initialState, action) => {
	switch (action.type) {
	  case FETCHROCKETS:
		return action.newState;
	  case RESERVEDRAGON: {
		const valState = state.map((dragon) => {
		  if (dragon.dragon_id !== action.id) {
			return dragon;
		  }
		  return { ...dragon, reserved: true };
		});
		return valState;
	  }
