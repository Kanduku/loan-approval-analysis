import React from 'react';
import { motion } from 'framer-motion';
import ChartsGroup from './ChartsGroup';
import './ResultDisplay.css';

function ResultDisplay({ result, loading }) {
  if (loading) {
    return (
      <div className="loading-box">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <p className="loading-text">Predicting... Hang tight 🔍</p>
      </div>
    );
  }

  if (!result) return null;

  if (result.error) {
    return <p className="error-text">Error: {result.error}</p>;
  }

  return (
    <motion.div
      className="result-box"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="prediction-text">Prediction: {result.prediction}</h3>
      <p className="confidence-text">Confidence: {result.confidence}%</p>
      <h4 className="charts-title">Charts & Explanation:</h4>
      <ChartsGroup explanation={result.explanation} input={result.input} />
    </motion.div>
  );
}

export default ResultDisplay;
