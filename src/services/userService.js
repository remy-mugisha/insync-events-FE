import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Mock user data for development
const mockUser = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: '/default-avatar.jpg',
  bio: 'Event enthusiast and technology lover',
  joinDate: '2024-01-15T00:00:00Z',
  interests: ['Technology', 'Music', 'Sports']
};

export const fetchUserProfile = async () => {
  try {
    // In development, return mock data
    if (import.meta.env.DEV) {
      return mockUser;
    }

    // In production, make actual API call
    const response = await axios.get(`${API_URL}/users/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return mockUser; // Fallback to mock data
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const response = await axios.put(`${API_URL}/users/profile`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

export const updateUserInterests = async (interests) => {
  try {
    const response = await axios.patch(`${API_URL}/users/interests`, { interests });
    return response.data;
  } catch (error) {
    console.error('Error updating interests:', error);
    throw error;
  }
};