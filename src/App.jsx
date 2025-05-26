import { useEffect } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';

import { initAnimations } from './scripts/animations';

import Home from './pages/home';
import { Rituals } from './pages/rituals';
import { LookBooks } from './pages/looks';
import { OurRoots } from './pages/roots';
import { Stories } from './pages/stories';
import { Cart } from './pages/cart';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  useEffect(() => {
    initAnimations();
  }, [location.pathname]);

  

  return (
    <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rituals" element={<Rituals/>} />
          <Route path="/looks" element={<LookBooks/>} />
          <Route path="/roots" element={<OurRoots/>} />
          <Route path="/stories" element={<Stories/>} />
          <Route path="/cart" element={<Stories/>} />
        </Routes>
    </main>
  );
}

export default App;