import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { RouterElement } from './routes';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <RouterElement />
    </div>
  );
}

export default App;
