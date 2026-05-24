import { useEffect, useState } from 'react';
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
      className="loader-screen"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="loader-container">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="loader-logo"
        >
          CY
        </motion.div>
        <h2 className="loader-title">
          {text}
          <span className="typing-cursor"></span>
        </h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
