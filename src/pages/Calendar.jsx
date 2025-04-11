import React, { useState, useEffect } from 'react';
import './calendar.css';

const Calendar = () => {
  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents([
        {
          id: '1',
          title: 'Team Meeting',
          date: new Date().toISOString(),
          location: 'Office',
          color: '#3b82f6'
        },
        {
          id: '2',
          title: 'Client Call',
          date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
          location: 'Zoom',
          color: '#10b981'
        }
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  const dayEvents = events.filter(event =>
    new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1 className="calendar-title">My Calendar</h1>
        <div className="view-toggle">
          {['day', 'week', 'month'].map((v) => (
            <button
              key={v}
              className={view === v ? 'active' : ''}
              onClick={() => handleViewChange(v)}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
        className="calendar-date-picker"
      />

      <h2 className="events-title">
        Events on {selectedDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </h2>

      {dayEvents.length > 0 ? (
        <div className="event-list">
          {dayEvents.map((event) => (
            <div key={event.id} className="event-item">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-details">
                    {new Date(event.date).toLocaleTimeString()} • {event.location}
                  </p>
                </div>
                <span
                  className="event-badge"
                  style={{ backgroundColor: event.color || '#3b82f6' }}
                >
                  Details
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-events">No events scheduled for this day</p>
      )}
    </div>
  );
};

export default Calendar;
