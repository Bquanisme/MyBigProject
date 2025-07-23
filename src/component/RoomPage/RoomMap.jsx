import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import '../../AllCss/Home.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RoomMap = ({id, logo, name, description, people, tickets, cost }) => {
  const user = useSelector((state) => state.auth.user);
  const checkUser = user ? '/User/User/Room' : '/Room';

  return (
    <div className='margin'>
      <Link to={`${checkUser}/${id}`} style={{ textDecoration: 'none' }}>
      <Box display="flex" gap={2} p={2} borderRadius={2} boxShadow={1} bgcolor="#fff" width='100%'>
      {/* Image */}
      <Box sx={{ width: 240, height: 210, overflow: 'hidden' }}>
        <img
          src={logo}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}
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
          <Box display="flex" justifyContent='space-between'>
            <Box display="flex" gap={3} alignItems="center">
                <Box display="flex" alignItems="center" gap={0.5}>
                <GroupIcon fontSize="small" color="action" />
                <Typography variant="body2">{people} người</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                <ConfirmationNumberIcon fontSize="small" color="action" />
                <Typography variant="body2">{tickets} Vé còn lại</Typography>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center">
                <Box textAlign='center'>
                <Typography variant="caption" color="text.secondary" fontSize='16px'>
                    Giá từ:
                </Typography><br />
                <Typography mt={1} fontWeight="bold" color="primary" fontSize='20px'>
                    {cost.toLocaleString('vi-VN')} đ
                </Typography>
                </Box>
            </Box>
            </Box>
        </Box>
      </Box>
    </Box>
    </Link>
    </div>
  );
};

export default RoomMap;
