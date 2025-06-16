import React from 'react';

const Profile = ({ user }) => {
  const isFreelancer = user.role === 'freelancer';
  const isClient = user.role === 'client';

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header text-center mb-4">
        <img
          src={user.avatar || "https://via.placeholder.com/150"} 
          alt="Profile"
          className="rounded-circle img-fluid"
          style={{ width: "120px", height: "120px" }}
        />
        <h3 className="mt-2">{user.name}</h3>
        <p>{user.location || "Location not provided"}</p>
      </div>

      {/* Bio Section */}
      <div className="profile-section mb-4">
        <h5>Bio</h5>
        <p>{user.bio || "No bio available."}</p>
      </div>

      {/* Contact Info */}
      <div className="profile-section mb-4">
        <h5>Contact Info</h5>
        <ul className="list-unstyled">
          <li><i className="fas fa-envelope"></i> {user.email}</li>
          <li><i className="fas fa-phone"></i> {user.phone || "Not provided"}</li>
        </ul>
      </div>

      {/* Freelancer Only */}
      {isFreelancer && (
        <>
          {/* Skills */}
          <div className="profile-section mb-4">
            <h5>Skills</h5>
            <div className="d-flex flex-wrap gap-2">
              {user.skills?.map((skill, index) => (
                <span key={index} className="badge bg-success">{skill}</span>
              ))}
            </div>
          </div>

          {/* Hourly Rate */}
          <div className="profile-section mb-4">
            <h5>Hourly Rate</h5>
            <p>{user.hourlyRate ? `$${user.hourlyRate}/hr` : "Not set"}</p>
          </div>

          {/* Completed Projects */}
          <div className="profile-section mb-4">
            <h5>Completed Projects</h5>
            <p>{user.completedProjects || 0}</p>
          </div>

          {/* Portfolio */}
          <div className="profile-section mb-4">
            <h5>Portfolio</h5>
            {user.portfolioLinks?.length > 0 ? (
              <ul>
                {user.portfolioLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No portfolio links.</p>
            )}
          </div>

          {/* Reviews */}
          <div className="profile-section mb-4">
            <h5>Reviews</h5>
            {user.reviews?.length > 0 ? (
              <ul>
                {user.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.clientName}:</strong> {review.text} (Rating: {review.rating})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </>
      )}

      {/* Client Only */}
      {isClient && (
        <>
          {/* Company Info */}
          <div className="profile-section mb-4">
            <h5>Company Info</h5>
            <p>{user.company || "N/A"}</p>
          </div>

          {/* Total Projects Posted */}
          <div className="profile-section mb-4">
            <h5>Total Projects Posted</h5>
            <p>{user.totalProjectsPosted || 0}</p>
          </div>

          {/* Total Spend */}
          <div className="profile-section mb-4">
            <h5>Total Spend</h5>
            <p>${user.totalSpend || "0.00"}</p>
          </div>

          {/* Ratings from Freelancers */}
          <div className="profile-section mb-4">
            <h5>Ratings from Freelancers</h5>
            <p>{user.clientRating ? `${user.clientRating}/5` : "No ratings yet."}</p>
          </div>

          {/* Active Listings */}
          <div className="profile-section mb-4">
            <h5>Active Listings</h5>
            {user.activeListings?.length > 0 ? (
              <ul>
                {user.activeListings.map((listing, index) => (
                  <li key={index}>{listing.title}</li>
                ))}
              </ul>
            ) : (
              <p>No active listings.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;