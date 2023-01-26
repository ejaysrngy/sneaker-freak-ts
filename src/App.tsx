import React from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <main id="main-section">
        {/* break off this section to a component
            pass in children in along with HeroBanner
        */}
        <HeroBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
