import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/rockets" exact="true" element={<NotFound />} />
          <Route path="/missions" element={<NotFound />} />
          <Route path="/dragons" element={<NotFound />} />
          <Route path="/myprofile" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  );
}
export default App;
