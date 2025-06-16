import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCurrentUser } from '../../services/auth.service';
const ProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    skills: [],
    portfolioLinks: [],
  });

  const [isEditing, setIsEditing] = useState(false);

  // Simulate fetching user data (replace with real API call)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/me'); // Replace with actual endpoint
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
      await axios.put('http://localhost:5000/api/users/me', user); // Replace with actual endpoint
      alert('Profile saved successfully!');
      setIsEditing(false);
    } catch (error) {
      alert('Failed to save profile.');
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>

      {/* Edit Button */}
      <button onClick={() => setIsEditing(true)} disabled={isEditing} style={{ float: 'right' }}>
        Edit
      </button>

      {/* Profile Form */}
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
              setUser({ ...user, skills: e.target.value.split(',').map((skill) => skill.trim()) })
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
            <div>
              <label>Add Portfolio Link</label>
              <input
                type="text"
                name="portfolioLink"
                placeholder="Enter link URL"
                onChange={(e) => {
                  const newLink = { title: e.target.value, url: e.target.value };
                  setUser({ ...user, portfolioLinks: [...user.portfolioLinks, newLink] });
                }}
              />
            </div>
          )}
        </div>

        {/* Save Button */}
        {isEditing && (
          <button onClick={handleSave}>Save Changes</button>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;