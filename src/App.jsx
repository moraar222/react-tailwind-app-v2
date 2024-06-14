import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
