import { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchUserProfile } from '../services/userService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const { data: userData } = useQuery('userProfile', fetchUserProfile, {
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  const login = async (credentials) => {
    // Implement login logic
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement logout logic
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);