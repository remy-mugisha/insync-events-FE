import {
    Box,
    Typography,
    Button,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Paper,
  } from '@mui/material';
  import {
    CalendarToday,
    LocationOn,
    AttachMoney,
    People,
    Description,
  } from '@mui/icons-material';
  import { format } from 'date-fns';
  
  const EventDetail = ({ event }) => {
    return (
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {event.title}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip label={event.category} color="primary" />
          {event.isVirtual && <Chip label="Virtual" color="secondary" />}
        </Box>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1">{event.description}</Typography>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <List>
          <ListItem>
            <ListItemIcon>
              <CalendarToday />
            </ListItemIcon>
            <ListItemText
              primary="Date & Time"
              secondary={format(new Date(event.date), 'PPPPp')}
            />
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText
              primary="Location"
              secondary={event.isVirtual ? 'Online Event' : event.location}
            />
          </ListItem>
          
          {event.price > 0 && (
            <ListItem>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Price" secondary={`$${event.price.toFixed(2)}`} />
            </ListItem>
          )}
          
          <ListItem>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText
              primary="Attendees"
              secondary={`${event.attendeesCount} going`}
            />
          </ListItem>
        </List>
        
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button variant="contained" size="large">
            Register Now
          </Button>
          <Button variant="outlined" size="large">
            Add to Calendar
          </Button>
        </Box>
        
        {event.organizer && (
          <>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" gutterBottom>
              Organizer
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src={event.organizer.avatar} />
              <Typography>{event.organizer.name}</Typography>
            </Box>
          </>
        )}
      </Paper>
    );
  };
  
  export default EventDetail;