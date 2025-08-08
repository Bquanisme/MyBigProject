import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, FormControl, InputLabel, Select } from '@mui/material';

export default function BasicMenu({onSortChange}) {
  const [sortType, setSortType] = React.useState('');
  
    const handleChange = (event) => {
      setSortType(event.target.value);
      onSortChange(event.target.value);
    };
  
    return (
      <Box >
        <FormControl size="small" sx={{ minWidth: 160, bgcolor: 'white' }}>
          <InputLabel>Tour</InputLabel>
          <Select
            value={sortType}
            label="Chọn kiểu"
            onChange={handleChange}
          >
            <MenuItem value="">----- Lọc theo -----</MenuItem>
            <MenuItem value="tour">Tour</MenuItem>
            <MenuItem value="room">Room</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
}
