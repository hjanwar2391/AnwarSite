import React from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import Sidevar from './components/Home/Sidevar/Sidevar';

const App = () => {
  return (
    <main>

      <Sidevar></Sidevar>
      <Home></Home>
      
    </main>
  );
};

export default App;