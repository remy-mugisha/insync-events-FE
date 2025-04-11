import React, { useState, useEffect } from 'react';
import './userprofile.css';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'john@example.com',
        image: '/images/mainhall.jpg',
        joinDate: '2022-01-15T00:00:00',
        bio: 'Technology enthusiast and event organizer',
        interests: ['Technology', 'Design', 'Music', 'Travel']
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src={user.image}
          alt="Profile" 
          className="profile-avatar"
        />
        <div className="profile-info">
          <h1 className="profile-name">{user?.name}</h1>
          <p className="profile-email">{user?.email}</p>
          <p className="profile-join-date">
            Member since {new Date(user?.joinDate).toLocaleDateString()}
          </p>
        </div>
        <button
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      
      <div className="tabs-container">
        {['Profile', 'My Events', 'Interests', 'Settings'].map((tab, index) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {activeTab === 0 && (
        <div className="profile-content">
          {isEditing ? (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  defaultValue={user?.name}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="form-input"
                />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Bio</label>
                <textarea
                  defaultValue={user?.bio}
                  className="form-textarea"
                />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <button className="save-button">
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="section-title">About</h2>
              <p className="profile-bio">
                {user?.bio || 'No bio provided.'}
              </p>
              
              <h2 className="section-title">Preferences</h2>
              <div className="interests-container">
                {user?.interests?.map(interest => (
                  <span key={interest} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
