import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import HeroAndLogin from './components/HeroAndLogin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroAndLogin />
    </div>
  );
}

export default App;