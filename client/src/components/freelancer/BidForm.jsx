import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BidForm = () => {
  const { projectId } = useParams(); // assumes route like /freelancer/bid/:projectId
  const [bidAmount, setBidAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setError('You must be logged in to place a bid.');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/bids',
        { bidAmount, message, projectId },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        }
      );
      setSuccess('Bid placed successfully!');
      setError('');
      setBidAmount('');
      setMessage('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Error placing bid.');
      setSuccess('');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Place Your Bid</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <button type="submit" className="btn btn-primary">Place Bid</button>
      </form>
    </div>
  );
};

export default BidForm;
