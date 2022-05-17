const rocketAPI = 'https://api.spacexdata.com/v3/rockets';

const getRocketData = async () => {
  const response = await fetch(rocketAPI, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const rocketData = await response.json();
  return rocketData;
};

export default getRocketData;
