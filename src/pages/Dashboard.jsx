// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import {
  Box,
  Grid,
  Typography,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import EventStats from '../components/dashboard/EventStats';
import EventCalendar from '../components/events/EventCalendar';
import RecentActivities from '../components/dashboard/RecentActivities';
import { fetchDashboardData } from '../services/dashboardService';

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const { data, isLoading } = useQuery('dashboard', fetchDashboardData);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        INSYNC Dashboard
      </Typography>
      
      <EventStats events={data?.events || []} />
      
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ my: 3 }}>
        <Tab label="Calendar View" />
        <Tab label="Event Analytics" />
        <Tab label="User Management" />
      </Tabs>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <EventCalendar 
              events={data?.events.map(e => ({
                ...e,
                start: new Date(e.date),
                end: new Date(new Date(e.date).setHours(new Date(e.date).getHours() + 2))
              }))} 
              onSelectEvent={(event) => console.log('Event selected:', event)}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentActivities activities={data?.activities || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;