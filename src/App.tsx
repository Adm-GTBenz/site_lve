import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const emojis = ['😍', '😘', '😳'];

  useEffect(() => {
    const interval = setInterval(() => {
      // Démarrer la transition
      setOpacity(0);
      
      // Changer l'emoji après la transition
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % emojis.length);
        setOpacity(1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center">
      <div className="relative">
        <div className="relative">
          <div 
            className="text-9xl absolute transition-opacity duration-500 ease-in-out"
            style={{ opacity }}
          >
            {emojis[currentIndex]}
          </div>
          <div 
            className="text-9xl opacity-0"
            aria-hidden="true"
          >
            {emojis[currentIndex]}
          </div>
        </div>
        <div className="absolute -top-4 -right-4 animate-pulse text-red-500">
          <Heart size={48} fill="currentColor" />
        </div>
      </div>
      <div className="mt-8 text-2xl font-semibold text-pink-600 animate-pulse">
        Animation d'Amour
      </div>
    </div>
  );
}

export default App;