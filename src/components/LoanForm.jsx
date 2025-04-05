import React, { useState } from 'react';
import './LoanForm.css';

function LoanForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    gender: 'Male',
    married: 'Yes',
    dependents: '0',
    education: 'Graduate',
    self_employed: 'No',
    applicant_income: '',
    coapplicant_income: '',
    loan_amount: '',
    loan_term: '12',
    credit_history: '1',
    property_area: 'Urban',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const options = {
    gender: ['Male', 'Female'],
    married: ['Yes', 'No'],
    dependents: ['0', '1', '2', '3+'],
    education: ['Graduate', 'Not Graduate'],
    self_employed: ['Yes', 'No'],
    loan_term: ['12', '24', '36', '60'],
    credit_history: ['1', '0'],
    property_area: ['Urban', 'Semiurban', 'Rural'],
  };

  return (
    <form className="loan-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Loan Prediction Form</h2>
      {Object.entries(formData).map(([key, val]) => (
        <div className="form-group" key={key}>
          <label className="form-label">{key.replace(/_/g, ' ')}</label>
          {["applicant_income", "coapplicant_income", "loan_amount"].includes(key) ? (
            <input
              className="form-input"
              type="number"
              name={key}
              value={val}
              onChange={handleChange}
              required
            />
          ) : (
            <select
              className="form-select"
              name={key}
              value={val}
              onChange={handleChange}
            >
              {options[key].map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
        </div>
      ))}
      <button className="submit-btn" type="submit">💰 Predict</button>
    </form>
  );
}

export default LoanForm;
