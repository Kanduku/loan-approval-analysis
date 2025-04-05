import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      {Object.entries(formData).map(([key, val]) => (
        <div key={key}>
          <label>{key.replace(/_/g, ' ')}</label>
          {["applicant_income", "coapplicant_income", "loan_amount"].includes(key) ? (
            <input
              type="number"
              name={key}
              value={val}
              onChange={handleChange}
              required
            />
          ) : (
            <select name={key} value={val} onChange={handleChange}>
              {options[key].map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
        </div>
      ))}
      <button type="submit">💰 Predict</button>
    </form>
  );
}

export default LoanForm;
