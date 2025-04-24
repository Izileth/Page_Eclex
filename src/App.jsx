import { useEffect } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';

import { initAnimations } from './scripts/animations';

function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  

  return (
    <main>
      <div className="loader">
        <Loader />
        <div className="container">
          <Hero />
          <Navigation />
        </div>
        <div className="header">
          <div className="hero-copy">
            <div className="line">
              <h1><span>Ecléx</span> Life</h1>
            </div>
            <div className="line">
              <h1>Create <span>Your Style</span></h1>
            </div>
          </div>
          <div className="line">
            <p> 2025 | All Judices Reserverd</p>
          </div>
        </div>
        <CallToAction />
      </div>
    </main>
  );
}

export default App;