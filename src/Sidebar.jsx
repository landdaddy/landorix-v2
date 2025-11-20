import React from 'react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: 320,
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(20px)',
        padding: '2rem',
        zIndex: 500,
        overflowY: 'auto'
      }}
    >
      <h2 style={{ marginTop: 0 }}>Filters</h2>
      {/* Add your sliders / toggles here — we'll expand next commit */}
      <p style={{ opacity: 0.7 }}>Acres • Zoning • Potential • Vacant only</p>
    </motion.div>
  );
}
