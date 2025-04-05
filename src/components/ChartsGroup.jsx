import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, BarElement, ArcElement,
  CategoryScale, LinearScale, Tooltip, Legend
} from 'chart.js';

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

function ChartsGroup({ explanation, input }) {
  const featureLabels = explanation.map(([feat]) => feat);
  const featureValues = explanation.map(([, score]) => parseFloat(score.toFixed(2)));

  return (
    <div className="chart-grid">
      {/* Feature Importance Chart */}
      <Bar
        data={{
          labels: featureLabels,
          datasets: [{
            label: 'Feature Importance',
            data: featureValues,
            backgroundColor: '#1f77b4',
          }]
        }}
        options={{ responsive: true, plugins: { legend: { display: false } } }}
      />

      {/* Income vs Loan Chart */}
      <Bar
        data={{
          labels: ['Applicant Income', 'Co-applicant Income', 'Loan Amount'],
          datasets: [{
            label: '₹ Value',
            data: [
              parseFloat(input.applicant_income),
              parseFloat(input.coapplicant_income),
              parseFloat(input.loan_amount),
            ],
            backgroundColor: ['#2ca02c', '#ff7f0e', '#d62728'],
          }]
        }}
        options={{ responsive: true }}
      />

      {/* Credit History Pie Chart */}
      <Doughnut
        data={{
          labels: ['Has Credit History', 'No Credit History'],
          datasets: [{
            label: 'Credit History',
            data: input.credit_history === '1' ? [1, 0] : [0, 1],
            backgroundColor: ['#4caf50', '#f44336'],
          }]
        }}
        options={{ responsive: true }}
      />
    </div>
  );
}

export default ChartsGroup;
