import React from 'react';
import './App.css';

const PendingPayment = () => {
  return (
    <div className="pending-payment-container">
      <div className="pending-payment-card">
        <h2>Payment Pending</h2>
        <p>The project must be paid by the client before proceeding.</p>
      </div>
    </div>
  );
};

export default PendingPayment;
