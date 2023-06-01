import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Dragons from './components/dragon/dragons';
import MissionsContainer from './components/pages/MissionsContainer';
import NavBar from './components/navbar/NavBar';
import NotFound from './components/pages/NotFound';
import ProfileContainer from './components/pages/ProfileContainer';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/space-travelers" exact="true" element={<Rockets />} />
          <Route path="/missions" element={<MissionsContainer />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/myprofile" element={<ProfileContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
