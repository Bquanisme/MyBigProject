import React from 'react';
import { Box, Typography } from '@mui/material';

const History = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant='h5' sx={{
        padding: 10,
        textAlign: 'center'
      }}>
        Vui lòng nhấn vào chi tiết đơn để xem chi tiết đơn hàng
      </Typography>
    </Box>
  );
};

export default History;
