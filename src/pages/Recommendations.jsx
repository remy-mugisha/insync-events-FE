import React, { useState, useEffect } from 'react';
import './recommentation.css';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecommendations([
        {
          id: '1',
          title: 'AI Conference',
          date: '2023-11-20T09:00:00',
          description: 'Learn about the latest advancements in artificial intelligence',
          location: 'Boston, MA',
          category: 'Technology',
          image: '/images/mainhall.jpg'
        },
        {
          id: '2',
          title: 'Startup Networking',
          date: '2023-12-10T18:00:00',
          description: 'Connect with entrepreneurs and investors',
          location: 'Austin, TX',
          category: 'Business',
          image: '/images/mainhall.jpg'
        }
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="recommendations-container">
      <h1 className="recommendations-title">Recommended Events For You</h1>

      <div className="recommendations-grid">
        {recommendations.map(event => (
          <div key={event.id} className="recommendation-card">
            <img 
              src={event.image} 
              alt={event.title} 
              className="recommendation-image"
            />
            <div className="recommendation-content">
              <h2 className="recommendation-name">{event.title}</h2>
              <div className="recommendation-meta">
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{event.location}</span>
              </div>
              <p className="recommendation-description">{event.description}</p>
              <div className="recommendation-footer">
                <span className="recommendation-category">{event.category}</span>
                <button className="details-button">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
