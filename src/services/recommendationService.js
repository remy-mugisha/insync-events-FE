import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Mock recommendation data for development
const mockRecommendations = [
  {
    id: 'rec-1',
    title: 'Tech Conference 2023',
    description: 'Annual technology conference featuring the latest innovations.',
    date: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
    category: 'Technology',
    image: '/tech-conference.jpg',
    matchScore: 0.92
  },
  {
    id: 'rec-2',
    title: 'Jazz Night',
    description: 'An evening of smooth jazz with local artists.',
    date: new Date(Date.now() + 86400000 * 5).toISOString(), // 5 days from now
    category: 'Music',
    image: '/jazz-night.jpg',
    matchScore: 0.85
  },
  {
    id: 'rec-3',
    title: 'Startup Networking',
    description: 'Connect with local entrepreneurs and investors.',
    date: new Date(Date.now() + 86400000 * 7).toISOString(), // 1 week from now
    category: 'Business',
    image: '/startup-networking.jpg',
    matchScore: 0.78
  }
];

export const fetchRecommendations = async () => {
  try {
    // In development, return mock data
    if (import.meta.env.DEV) {
      return mockRecommendations;
    }

    // In production, make actual API call
    const response = await axios.get(`${API_URL}/recommendations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return mockRecommendations; // Fallback to mock data
  }
};

export const sendFeedback = async (eventId, liked) => {
  try {
    const response = await axios.post(`${API_URL}/recommendations/feedback`, {
      eventId,
      liked
    });
    return response.data;
  } catch (error) {
    console.error('Error sending feedback:', error);
    throw error;
  }
};