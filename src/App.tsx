import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';

import { useAppSelector } from "./hooks/hooks";


function App() {
  const { name } = useAppSelector((rootReducer) => rootReducer.nameReducer);
  
  const typeOfScroll = () => {
    if (name) {
      return "scroll"
    }
    return "hidden"
  }

  return (
    <div className="App">
      <GlobalStyles SetOverflow={typeOfScroll()}/>
      <Navbar />
      <Home/>
    </div>
  );
}
export default App;
