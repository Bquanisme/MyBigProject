import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const SortControl = ({ onSortChange }) => {
  const [sortType, setSortType] = useState('');

  const handleChange = (event) => {
    setSortType(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent='flex-end' padding='16px' paddingRight='30px' mb={2}>
      <Typography variant="body1" mr={1}>
        Sắp xếp theo:
      </Typography>
      <FormControl size="small" sx={{ minWidth: 160, bgcolor: 'white' }}>
        <InputLabel>Select a sort</InputLabel>
        <Select
          value={sortType}
          label="Chọn kiểu"
          onChange={handleChange}
        >
          <MenuItem value="">-- Không sắp xếp --</MenuItem>
          <MenuItem value="priceAsc">Giá tăng dần</MenuItem>
          <MenuItem value="priceDesc">Giá giảm dần</MenuItem>
          <MenuItem value="nameAsc">Tên A-Z</MenuItem>
          <MenuItem value="nameDesc">Tên Z-A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortControl;
