import React from 'react';
import Getsellercount from './demo';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Seller from './Seller';
import Buyer from './Buyer';
import LandInspector from './LandInspector';
// import Addmetamask from './Addmetamask';
import Sellerdash from './sellerdash';
import Navbar from './Navbar';
import Buyerdash from './Buyerdash';
import Landinspdash from './Landinspdash';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/landinspector" element={<LandInspector />} />
        <Route path="/sellerdash" element={<Sellerdash />} />
        <Route path="/buyerdash" element={<Buyerdash />} />
        <Route path="/Landinspdash" element={<Landinspdash />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
