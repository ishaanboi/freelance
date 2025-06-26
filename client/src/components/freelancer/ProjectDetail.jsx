import React, { useState } from 'react';
import axios from 'axios';

const BidForm = ({ projectId }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('user'))?.token;

    try {
      await axios.post('http://localhost:5000/api/bids', {
        projectId,
        bidAmount,
        message
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      });

      alert('Bid placed successfully!');
      setBidAmount('');
      setMessage('');
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Failed to place bid');
    }
  };

  return (
    <form onSubmit={handleBidSubmit}>
      <div className="mb-3">
        <label>Bid Amount</label>
        <input
          type="number"
          className="form-control"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Message</label>
        <textarea
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">Place Bid</button>
    </form>
  );
};

export default BidForm;
