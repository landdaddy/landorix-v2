import React, { useState, useEffect } from 'react';
import Map from './Map';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, delay: 7 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            letterSpacing: '0.2em',
          }}
        >
          LANDORIX
        </motion.div>
      )}

      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 8,
            cursor: 'pointer'
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <Map darkMode={darkMode} />
      <Sidebar />
    </>
  );
}
import React, { useState, useEffect } from 'react';
import Map from './Map';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 10000); // 10-second max loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, delay: 8 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            letterSpacing: '0.2em',
          }}
        >
          LANDORIX
        </motion.div>
      )}

      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 8,
            cursor: 'pointer'
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <Map darkMode={darkMode} />
      <Sidebar />
    </>
  );
}
