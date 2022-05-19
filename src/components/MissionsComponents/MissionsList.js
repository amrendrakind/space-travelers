import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { getMissions } from '../../redux/missions/missions';
import MissionItem from './MissionItem';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {(missionsList || []).map((mission) => (
          <MissionItem key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsList;
