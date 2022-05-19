import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound';
import Dragons from './components/dragons';
import MissionsContainer from './components/pages/MissionsContainer';
import Rockets from './components/rockets/Rockets';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/pages/ProfileContainer';

import Profile from './components/my-profile';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/missions" element={<MissionsContainer />} />
          <Route path="/rockets" exact="true" element={<Rockets />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/myprofile" element={<ProfileContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
