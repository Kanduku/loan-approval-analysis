import React from 'react';
import { motion } from 'framer-motion';
import ChartsGroup from './ChartsGroup';

function ResultDisplay({ result }) {
  if (!result) return null;

  if (result.error) {
    return <p style={{ color: 'red', marginTop: '20px' }}>Error: {result.error}</p>;
  }

  return (
    <motion.div
      className="result-box"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>Prediction: {result.prediction}</h3>
      <p>Confidence: {result.confidence}%</p>
      <h4 style={{ marginTop: '20px' }}>Charts & Explanation:</h4>
      <ChartsGroup explanation={result.explanation} input={result.input} />
    </motion.div>
  );
}

export default ResultDisplay;
