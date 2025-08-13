import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import PlaceIcon from '@mui/icons-material/Place';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomeTicketUI = ({ logo, name, description, days, people, locations, tickets, cost }) => {
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user)
  
    const handleNavigateTour = () => {
      if(user){
        navigate('/User/Tour')
      }else{
        navigate('/Tour')
      }
    }
  return (
    <div className='margin-home'>
      <Box display="flex" gap={2} p={2} borderRadius={2} boxShadow={1} bgcolor="#fff">
      {/* Image */}
      <Box sx={{ width: 240, height: 160, borderRadius: 2, overflow: 'hidden' }}>
        <img
          src={logo}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </Box>

      {/* Content */}
      <Box flex={1} display="flex" flexDirection="column" justifyContent="left">
        {/* Title + Description */}
        <Box>
          <Typography variant="h6" fontWeight="bold" color="blue" mb={0.5} textAlign='left' fontSize='16px' >
            {name}
          </Typography><br />
          <Typography variant="body2" color="text.secondary" mb={1.5} textAlign='left' fontSize='14px' >
            {description}
          </Typography><br /><br />

          {/* Info Row */}
          <Box display="flex" gap={3} alignItems="center">
            <Box display="flex" alignItems="center" gap={0.5}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="body2">{days} ngày</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <GroupIcon fontSize="small" color="action" />
              <Typography variant="body2">{people} người</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <PlaceIcon fontSize="small" color="action" />
              <Typography variant="body2">{locations} địa điểm</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <ConfirmationNumberIcon fontSize="small" color="action" />
              <Typography variant="body2">{tickets} Vé còn lại</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Price + Button */}
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        <Box textAlign='center'>
          <Typography variant="caption" color="text.secondary" fontSize='16px'>
            3.1540 Review
          </Typography><br />
          <Rating value={5} readOnly size="medium" />
          <Typography mt={1} fontWeight="bold" color="primary" fontSize='20px'>
            {cost.toLocaleString('vi-VN')} đ / Người
          </Typography>
        </Box>

        <Button variant="outlined" size="small" sx={{ mt: 1 }} onClick={handleNavigateTour} >
          Đặt ngay
        </Button>
      </Box>
    </Box>
    </div>
  );
};

export default HomeTicketUI;
