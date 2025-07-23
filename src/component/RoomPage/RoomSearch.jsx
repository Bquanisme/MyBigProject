import React, { useState } from 'react';
import { Box, TextField, Button,Typography, FormControlLabel, Paper, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { resetRooms, setRoom } from '../../Redux/RoomSlice';

const RoomSearch = () => {
  const dispatch = useDispatch();
  const allRooms = useSelector(state => state.room.allRooms); 

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    const min = parseInt(minPrice, 10) || 0;
    const max = parseInt(maxPrice, 10) || Infinity;

    const filtered = allRooms.filter(room => room.cost >= min && room.cost <= max);
    dispatch(setRoom(filtered));
    console.log(filtered)
  };

  const handleRefresh = () => {
    setMinPrice('');
    setMaxPrice('');
    dispatch(resetRooms());
    console.log("RESET ALL ROOMS:", allRooms);
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

export default RoomSearch;
