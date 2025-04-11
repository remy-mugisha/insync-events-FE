import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const EventFilters = ({ filters, onFilterChange }) => {
  const categories = [
    'Music',
    'Sports',
    'Arts',
    'Technology',
    'Business',
    'Food',
    'Education',
    'Health',
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Search events"
            variant="outlined"
            value={filters.searchQuery}
            onChange={e => onFilterChange('searchQuery', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={filters.category}
              label="Category"
              onChange={e => onFilterChange('category', e.target.value)}
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DatePicker
            label="Date"
            value={filters.date}
            onChange={date => onFilterChange('date', date)}
            renderInput={params => <TextField {...params} fullWidth />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventFilters;