import React, { useState } from 'react';
import axios from 'axios';

const PostProject = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/projects', project, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token') // uncomment if using auth
        }
      });

      setMessage('Project posted successfully!');
      setProject({ title: '', description: '', budget: '', deadline: '' });
    } catch (error) {
      console.error(error);
      setMessage('Error posting project.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Post a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label>Description</label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label>Budget (₹)</label>
          <input
            type="number"
            name="budget"
            value={project.budget}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={project.deadline}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">Post Project</button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default PostProject;
