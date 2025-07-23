import React, { useState } from 'react';
import { Box, TextField, Button,Typography, FormControlLabel, Paper, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { resetTours, setTour } from '../../Redux/TourSlice';

const TourSearch = () => {
  const dispatch = useDispatch();
  const allTours = useSelector(state => state.tour.allTours); 

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    const min = parseInt(minPrice, 10) || 0;
    const max = parseInt(maxPrice, 10) || Infinity;

    const filtered = allTours.filter(tour => tour.cost >= min && tour.cost <= max);
    dispatch(setTour(filtered));
    console.log(filtered)
  };

  const handleRefresh = () => {
    setMinPrice('');
    setMaxPrice('');
    dispatch(resetTours());
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Khoảng giá
        </Typography>
        <Stack direction="row" spacing={1} mb={2}>
          <TextField
            size="small"
            label="Từ"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            fullWidth
          />
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            -
          </Typography>
          <TextField
            size="small"
            label="Đến"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            fullWidth
          />
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Button variant="contained" size="small" onClick={handleSearch}>
            Search
          </Button>
          <Button variant="outlined" size="small" onClick={handleRefresh}>
            Refresh
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default TourSearch;
