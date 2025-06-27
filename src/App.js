import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home'; // Adjust path if needed

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // 2.5s delay
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <SplashScreen />;
}

export default App;
