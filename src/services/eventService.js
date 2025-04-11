const mockEvents = [
  {
    id: 1,
    title: 'Tech Conference',
    description: 'Annual technology conference',
    date: new Date(Date.now() + 86400000).toISOString(),
    location: 'Convention Center',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Music Festival',
    description: 'Local bands performance',
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    location: 'City Park',
    category: 'Music'
  }
];

export const fetchEvents = async () => {
  return mockEvents;
};