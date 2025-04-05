import React, { useState } from 'react';
import LoanForm from './components/LoanForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrediction = async (formData) => {
    setLoading(true);
    setResult(null); // Optional: reset previous result
    try {
      const res = await fetch("https://loan-analysis-approval.onrender.com/predict_api/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.status === "success") {
        setResult({ ...json, input: formData });
      } else {
        setResult({ error: json.message });
      }
    } catch (error) {
      setResult({ error: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🏦 Loan Approval Predictor</h1>
      <div className="dashboard">
        <LoanForm onSubmit={handlePrediction} />
        <ResultDisplay result={result} loading={loading} />
      </div>
    </div>
  );
}

export default App;
