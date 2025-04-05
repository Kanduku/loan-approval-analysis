import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, BarElement, ArcElement,
  CategoryScale, LinearScale, Tooltip, Legend
} from 'chart.js';
import './ChartsGroup.css';

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

function ChartsGroup({ explanation, input }) {
  const featureLabels = explanation.map(([feat]) => feat);
  const featureValues = explanation.map(([, score]) => parseFloat(score.toFixed(2)));

  return (
    <div className="chart-grid">

      <div className="chart-box">
        <div className="chart-title">Feature Importance</div>
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
      </div>

      <div className="chart-box">
        <div className="chart-title">Income vs Loan Comparison</div>
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
      </div>

      <div className="chart-box">
        <div className="chart-title">Credit History</div>
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

      <div className="chart-box">
        <div className="chart-title">Income Distribution</div>
        <Doughnut
          data={{
            labels: ['Applicant Income', 'Co-applicant Income'],
            datasets: [{
              label: 'Income Distribution',
              data: [
                parseFloat(input.applicant_income),
                parseFloat(input.coapplicant_income),
              ],
              backgroundColor: ['#03a9f4', '#8bc34a'],
            }]
          }}
          options={{ responsive: true }}
        />
      </div>

      <div className="chart-box">
        <div className="chart-title">Loan Term Breakdown</div>
        <Doughnut
          data={{
            labels: ['Selected Loan Term (months)', 'Remaining (out of 60)'],
            datasets: [{
              data: [
                parseFloat(input.loan_term),
                60 - parseFloat(input.loan_term),
              ],
              backgroundColor: ['#ff9800', '#757575'],
            }]
          }}
          options={{ responsive: true }}
        />
      </div>

      <div className="chart-box">
        <div className="chart-title">Full Overview</div>
        <Bar
          data={{
            labels: [
              'Applicant Income', 'Co-applicant Income',
              'Loan Amount', 'Loan Term (months)'
            ],
            datasets: [{
              label: 'Value',
              data: [
                parseFloat(input.applicant_income),
                parseFloat(input.coapplicant_income),
                parseFloat(input.loan_amount),
                parseFloat(input.loan_term),
              ],
              backgroundColor: '#673ab7',
            }]
          }}
          options={{
            indexAxis: 'y',
            responsive: true,
            plugins: { legend: { display: false } }
          }}
        />
      </div>

    </div>
  );
}

export default ChartsGroup;
