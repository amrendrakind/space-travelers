import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound';
import Rockets from './components/rockets/Rockets';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/pages/ProfileContainer';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/rockets" exact="true" element={<Rockets />} />
          <Route path="/missions" element={<NotFound />} />
          <Route path="/dragons" element={<NotFound />} />
          <Route path="/myprofile" element={<ProfileContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  );
}
export default App;
