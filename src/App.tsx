import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';


function App() {


  return (
    <div className="App">
      <GlobalStyles SetOverflow=""/>
      <Navbar />
      <Home/>
    </div>
  );
}
export default App;
