import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, FormControl, InputLabel, Select } from '@mui/material';

export default function MenuForStatus({ onSortChangeMenu }) {
  const [sortType, setSortType] = React.useState('');
  
    const handleChange = (event) => {
      setSortType(event.target.value);
      onSortChangeMenu(event.target.value);
    };
  
    return (
      <Box >
        <FormControl size="small" sx={{ minWidth: 150, bgcolor: 'white' }}>
          <InputLabel>Chờ thanh toán</InputLabel>
          <Select
            value={sortType}
            label="Chọn kiểu"
            onChange={handleChange}
          >
            <MenuItem value="">----- Lọc theo -----</MenuItem>
            <MenuItem value="pending">pending</MenuItem>
            <MenuItem value="access">access</MenuItem>
            <MenuItem value="cancel">cancel</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
}
