import React, { useState } from 'react';
import LoanForm from './components/LoanForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handlePrediction = async (formData) => {
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
  };

  return (
    <div className="container">
      <h1>🏦 Loan Approval Predictor</h1>
      <LoanForm onSubmit={handlePrediction} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
