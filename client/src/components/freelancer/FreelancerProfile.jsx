import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCurrentUser } from '../../services/auth.service';
import './FreelancerProfile.css'; // Assuming you have some styles for the profile
const FreelancerProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    skills: [],
    portfolioLinks: [],
    hourlyRate: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newLink, setNewLink] = useState('');

  // Fetch user data on mount
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      alert("Please log in to view your profile");
      window.location.href = "/login";
      return;
    }

    // Fetch full user data from backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${currentUser.id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/me`, user);
      alert('Profile saved successfully!');
      setIsEditing(false);
    } catch (error) {
      alert('Failed to save profile.');
      console.error("Error saving profile:", error);
    }
  };

  const handleAddLink = () => {
    if (newLink.trim()) {
      setUser((prev) => ({
        ...prev,
        portfolioLinks: [...prev.portfolioLinks, { title: newLink, url: newLink }]
      }));
      setNewLink('');
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>

      {/* Edit Button */}
      <button onClick={() => setIsEditing(true)} disabled={isEditing} style={{ float: 'right' }}>
        Edit
      </button>

      <form>
        {/* Name */}
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label>Email</label>
          <p>{user.email}</p>
        </div>

        {/* Bio */}
        <div className="mb-3">
          <label>Bio</label>
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleInputChange}
            disabled={!isEditing}
          ></textarea>
        </div>

        {/* Skills */}
        <div className="mb-3">
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={user.skills.join(', ')}
            onChange={(e) =>
              setUser({ ...user, skills: e.target.value.split(',').map(s => s.trim()) })
            }
            disabled={!isEditing}
          />
        </div>

        {/* Portfolio Links */}
        <div className="mb-3">
          <label>Portfolio Links</label>
          <ul>
            {user.portfolioLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          {isEditing && (
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                placeholder="Enter portfolio link"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
              />
              <button type="button" onClick={handleAddLink} className="btn btn-success">
                Add
              </button>
            </div>
          )}
        </div>

        {/* Hourly Rate */}
        {isEditing && (
          <div className="mb-3">
            <label>Hourly Rate ($)</label>
            <input
              type="number"
              name="hourlyRate"
              value={user.hourlyRate || ''}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        )}

        {/* Save Button */}
        {isEditing && (
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
};

export default FreelancerProfile;