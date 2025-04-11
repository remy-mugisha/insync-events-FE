import { useQuery } from 'react-query';
import { fetchEvents } from '../services/eventService';

export const useEvents = (filters) => {
  return useQuery(
    ['events', filters],
    () => fetchEvents(filters),
    {
      keepPreviousData: true,
      staleTime: 30000, // 30 seconds
    }
  );
};