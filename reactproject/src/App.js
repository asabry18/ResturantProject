import React from 'react';
import SpecialMenu from './components/SpecialMenu';
import Footer from './views/footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpecialMenu />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
