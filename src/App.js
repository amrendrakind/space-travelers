import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound';
import MissionsContainer from './components/pages/MissionsContainer';
import ProfileContainer from './components/pages/ProfileContainer';
import Rockets from './components/pages/Rockets';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/missions" element={<MissionsContainer />} />
          <Route path="/rockets" exact="true" element={<Rockets />} />
          <Route path="/dragons" element={<NotFound />} />
          <Route path="/myprofile" element={<ProfileContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
