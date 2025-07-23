import React from 'react';
import { Box, Typography, Rating, Chip, Stack, Button } from '@mui/material';

const StandardRoomUI = ({ logo, name, cost }) => {
  return (
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          overflowX: 'auto',
          gap: 5,
          padding: 3
        }}
      >
    <Box
      sx={{
        width: 300,
        height: 450,
        bgcolor: '#fff',
        borderRadius: 3,
        boxShadow: 4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 210,
        }}
      >
        <img
          src={logo}
          alt={name}
          style={{
            width: '100%',
            height: 210,
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="black"
          fontSize="17px"
          mb={0.5}
        >
          {name}
        </Typography>

        <Rating value={4} readOnly size="medium" />
        <Typography color="error" fontSize="14px" mt={0.5}>
          Đánh giá: 4.0 Rất tốt <span style={{ color: '#666', fontSize: '13px' }}>(1.27k đánh giá)</span>
        </Typography>

        <Stack direction="row" spacing={1} mt={1} mb={1}>
          <Chip label="Giá Tốt" size="small" color="primary" />
          <Chip label="Gần Biển" size="small" color="primary" />
          <Chip label="Luxury" size="small" color="primary" />
        </Stack>

        {/* <Stack direction="row" spacing={1} justifyContent='left' marginTop={2}>
        <Button variant="outlined" size="small" sx={{backgroundColor: 'lightgray' , textTransform: 'none'}}>Giá Tốt</Button>
        <Button variant="outlined" size="small" sx={{backgroundColor: 'lightgray' , textTransform: 'none'}}>Gần Biển</Button>
        <Button variant="outlined" size="small" sx={{backgroundColor: 'lightgray', textTransform: 'none'}}>Luxury</Button>
        </Stack> */}

        <Box display="flex" justifyContent="left" gap={3} alignItems="center" mt={1}>
          <Typography fontWeight="bold" color="error" fontSize="20px">
            {cost.toLocaleString('vi-VN')} đ
          </Typography>
          <Typography fontSize="13px" color="text.secondary">
            *Chấp nhận sau 24h
          </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default StandardRoomUI;
