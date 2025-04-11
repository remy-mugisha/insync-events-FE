// src/services/calendarService.js
const mockEvents = [
  {
    id: 1,
    title: 'Team Meeting',
    date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    location: 'Office Room A',
    color: '#3f51b5'
  },
  {
    id: 2,
    title: 'Product Launch',
    date: new Date(Date.now() + 3 * 86400000).toISOString(), // 3 days from now
    location: 'Conference Hall',
    color: '#f50057'
  },
  {
    id: 3,
    title: 'Client Call',
    date: new Date().toISOString(), // Today
    location: 'Zoom',
    color: '#4caf50'
  }
];

export const fetchUserEvents = async () => {
  return mockEvents;
};