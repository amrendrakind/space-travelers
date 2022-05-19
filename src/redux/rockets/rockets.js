import APIServices from './APIServices';
import { GET_ROCKET_DATA, ROCKET_RESERVATION, CANCEL_ROCKET_RESERVATION } from '../types';

const initialState = [];
let Loading = false;

export function getRocketAPI(rockets) {
  const APIRocketData = rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickrImages: rocket.flickr_images,
    description: rocket.description,
  }));
  return {
    type: GET_ROCKET_DATA,
    payload: APIRocketData,
  };
}

export const rocketFromAPI = () => async (dispatch) => {
  if (Loading) return;
  setTimeout(async () => {
    const response = await APIServices.getRocketData();
    dispatch(getRocketAPI(response));
  }, 1000);
  Loading = true;
};

export function rocketReservation(id) {
  return {
    type: ROCKET_RESERVATION,
    payload: id,
  };
}

export function cancelRocketReservation(id) {
  return {
    type: CANCEL_ROCKET_RESERVATION,
    payload: id,
  };
}

export default function reducerRockets(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKET_DATA:
      return action.payload;
    case ROCKET_RESERVATION:
      return state.map((rocket) => (
        rocket.id !== action.payload ? rocket : { ...rocket, reserved: true }));
    case CANCEL_ROCKET_RESERVATION:
      return state.map((rocket) => (
        rocket.id !== action.payload ? rocket : { ...rocket, reserved: false }));
    default:
      return state;
  }
}
