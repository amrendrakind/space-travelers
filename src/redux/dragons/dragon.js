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
