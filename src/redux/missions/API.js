const missionsURL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const result = await fetch(missionsURL);
  const APIMissions = await result.json();
  return APIMissions;
};

export default fetchMissions;
