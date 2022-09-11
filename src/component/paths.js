import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Coursepage from './course page/coursepage';
import Home from './home/home';
function Paths() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course/:id" element={<Coursepage />} />
        <Route path="*" element={<Home />} />
      </Routes>
  )
}

export default Paths