// src/services/dashboardService.js
const mockDashboardData = {
    events: [
      {
        id: 1,
        title: 'Tech Summit',
        date: new Date(Date.now() + 86400000 * 2).toISOString(),
        location: 'Convention Center',
        attendeesCount: 150,
        color: '#3f51b5'
      },
      {
        id: 2,
        title: 'Workshop: AI in Business',
        date: new Date(Date.now() + 86400000 * 5).toISOString(),
        location: 'Room 203',
        attendeesCount: 30,
        color: '#f50057'
      }
    ],
    activities: [
      {
        id: 1,
        user: 'John Doe',
        action: 'registered for Tech Summit',
        time: '2 hours ago'
      },
      {
        id: 2,
        user: 'Jane Smith',
        action: 'created new event',
        time: '1 day ago'
      }
    ]
  };
  
  export const fetchDashboardData = async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockDashboardData), 500);
    });
  };