import React, { useState, useEffect } from 'react';
import './events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      setEvents([
        {
          id: '1',
          title: 'Tech Conference 2023',
          date: '2023-11-15T09:00:00',
          description:
            'Annual technology conference featuring the latest innovations',
          location: 'San Francisco, CA',
          image: '/images/mainhall.jpg' 
        },
        {
          id: '2',
          title: 'Design Workshop',
          date: '2023-12-05T10:00:00',
          description:
            'Hands-on workshop for UX/UI designers',
          location: 'New York, NY',
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
    <div className="events-page">
      <h1 className="events-title">All Events</h1>

      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              {event.image ? (
                <img src={event.image} alt={event.title} />
              ) : (
                // Fallback placeholder if no image is provided:
                <div className="image-placeholder"></div>
              )}
            </div>
            <div className="event-content">
              <h2 className="event-name">{event.title}</h2>
              <p className="event-date">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="event-description">{event.description}</p>
              <p className="event-location">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
