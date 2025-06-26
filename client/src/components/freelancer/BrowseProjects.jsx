import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrowseProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [showBidForm, setShowBidForm] = useState(null); // projectId or null
  const [bidAmount, setBidAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects.');
      }
    };

    fetchProjects();
  }, []);

  const handleBidSubmit = async (projectId) => {
    try {
      const token = JSON.parse(localStorage.getItem('user'))?.token;
      if (!token) return alert("You're not logged in");

      await axios.post(
        'http://localhost:5000/api/bids',
        { projectId, bidAmount, message },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        }
      );

      alert('Bid placed successfully!');
      setShowBidForm(null);
      setBidAmount('');
      setMessage('');
    } catch (err) {
      console.error('Error placing bid:', err);
      alert('Failed to place bid.');
    }
  };

  return (
    <div className="container mt-5 text-white">
      <h2>Browse Projects</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <div key={project._id} className="card bg-dark text-light p-3 my-3">
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <p><strong>Budget:</strong> ₹{project.budget}</p>
            <p><strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}</p>
            <button className="btn btn-outline-light mt-2" onClick={() => setShowBidForm(project._id)}>
              Bid Now
            </button>

            {showBidForm === project._id && (
              <div className="mt-3">
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Bid Amount"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Message (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn btn-success me-2" onClick={() => handleBidSubmit(project._id)}>
                  Submit Bid
                </button>
                <button className="btn btn-secondary" onClick={() => setShowBidForm(null)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BrowseProjects;
