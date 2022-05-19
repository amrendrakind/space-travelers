import fetchDragons from './api';

const FETCHDRAGONS = 'FETCHDRAGONS';
const RESERVEDRAGON = 'RESERVEDRAGON';
const UNRESERVEDRAGON = 'UNRESERVEDRAGON';
const initialState = [];

let store = false;
export const getDragons = () => async (dispatch) => {
  const newState = await fetchDragons();
  if (store) return;
  dispatch({
    type: FETCHDRAGONS,
    newState,
  });
  store = true;
};

export const reserveDragon = (id) => ({
  type: RESERVEDRAGON,
  id,
});

export const unreserveDragon = (id) => ({
  type: UNRESERVEDRAGON,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHDRAGONS:
      return action.newState;
    case RESERVEDRAGON: {
      const valState = state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
      return valState;
    }
    case UNRESERVEDRAGON: {
      const valState = state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
      return valState;
    }
    default:
      return state;
  }
};

export default reducer;
