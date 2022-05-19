import ProfileMissions from '../MissionsComponents/ProfileMissions';
import ProfileRocket from '../rockets/ProfileRocket';

const ProfileContainer = () => (
  <div className="profileContainer">
    <ProfileRocket />
    <ProfileMissions />
  </div>
);

export default ProfileContainer;
