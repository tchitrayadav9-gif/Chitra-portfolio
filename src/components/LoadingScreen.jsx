import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ finishLoading }) => {
  const [text, setText] = useState('');
  const fullText = 'T Chitra Yadav';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          finishLoading();
        }, 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-primary)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '16px',
            border: '2px solid var(--color-purple)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '800',
            color: 'var(--color-purple)',
            marginBottom: '24px',
          }}
        >
          CY
        </motion.div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: '600', minHeight: '36px' }}>
          {text}
          <span className="typing-cursor"></span>
        </h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
