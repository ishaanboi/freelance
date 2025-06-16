import React, { useState } from 'react';

const PostProject = () => {
  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  const [techStack, setTechStack] = useState('');
  const [budget, setBudget] = useState('');
  const [deliverables, setDeliverables] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Send this data to backend API later
    alert('Project Posted!');
  };

  return (
    <div className="container mt-5">
      <h2>Post a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Brief</label>
          <textarea className="form-control" value={brief} onChange={(e) => setBrief(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label>Tech Stack</label>
          <input type="text" className="form-control" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Budget</label>
          <input type="text" className="form-control" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Deliverables</label>
          <textarea className="form-control" value={deliverables} onChange={(e) => setDeliverables(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-success">Post Project</button>
      </form>
    </div>
  );
};

export default PostProject;