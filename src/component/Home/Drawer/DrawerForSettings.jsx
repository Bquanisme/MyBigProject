import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const DrawerForSettings = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    const item = currentPath.includes('History')
      ? 'orders'
      : currentPath.includes('Account')
      ? 'profile'
      : currentPath.includes('ChangePassword')
      ? 'password'
      : 'dashboard';
    setSelectedItem(item);
  }, [currentPath]);

  const buttonStyle = (item) => ({
    justifyContent: 'flex-start',
    textTransform: 'none',
    color: selectedItem === item ? 'white' : 'black',
    backgroundColor: selectedItem === item ? '#1976d2' : 'transparent',
    borderRadius: '10px',
    mb: 1,
    fontSize: '16px',
    px: 2,
    py: 1.5,
    '&:hover': {
      backgroundColor: selectedItem === item ? '#1565c0' : '#e0e0e0',
    },
  });

  return (
    <Box 
      sx={{
        width: 270,
        height: '100%',
        backgroundColor: '#f9f9f9',
        p: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="subtitle1" className='text-for-company' sx={{mb: 5}}>
        Công ty du lịch Việt Nam
      </Typography>


      <Link to="/User/Settings" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<DashboardIcon />} sx={buttonStyle('dashboard')}>
          Dashboard Personal
        </Button>
      </Link>

      <Link to="/User/Settings/History" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<ListAltIcon />} sx={buttonStyle('orders')}>
          Lịch sử đặt hàng
        </Button>
      </Link>

      <Link to="/User/Settings/Account" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<PersonIcon />} sx={buttonStyle('profile')}>
          Thông tin cá nhân
        </Button>
      </Link>

      <Link to="/User/Settings/ChangePassword" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<LockIcon />} sx={buttonStyle('password')}>
          Đổi mật khẩu
        </Button>
      </Link>
    </Box>
  );
};

export default DrawerForSettings;
