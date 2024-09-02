import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onApplyCertification, onCheckProgress }) => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Certification Portal</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card" onClick={onApplyCertification}>
          <div className="card-content">
            <h3>Apply Certification</h3>
            <p>Start the process to apply for a new certification.</p>
          </div>
        </div>
        <div className="dashboard-card" onClick={onCheckProgress}>
          <div className="card-content">
            <h3>Check Progress</h3>
            <p>Track the status of your certification application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
