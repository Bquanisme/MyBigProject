import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PeopleIcon from '@mui/icons-material/People';
import PaidIcon from '@mui/icons-material/Paid';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

const DrawerForAdmin = () => {
  const location = useLocation();
  const currentPath = location.pathname; //giong useparam, lay duong dan
  // console.log(currentPath)
  const [selectedItem, setSelectedItem] = useState('');

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  const handleChange = () => {
    if (open){
      return <ArrowDropDownIcon />
    }
    return<ArrowDropUpIcon/>
  }

  useEffect(() => {
    const item = currentPath.includes('Customer')
      ? 'Customer'
      : currentPath.includes('Staff')
      ? 'Staff'
      : currentPath.includes('Category')
      ? 'Category'
      : currentPath.includes('ManageTour')
      ? 'ManageTour'
      : currentPath.includes('CancelRequest')
      ? 'CancelRequest'
      : currentPath.includes('ManageOrders')
      ? 'ManageOrders'
      : 'dashboard';
    setSelectedItem(item);
  }, [currentPath]);

  const buttonStyle = (item) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textTransform: 'none',
    color: selectedItem === item ? 'blue' : 'black',
    backgroundColor: selectedItem === item ? '#deeaf8ff' : 'transparent',
    borderRadius: '10px',
    mb: 1,
    fontSize: '16px',
    gap: 3,
    px: 2,
    py: 1.5,
    '&:hover': {
      backgroundColor: selectedItem === item ? '#deeaf8ff' : '#e0e0e0',
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
      <Typography variant="subtitle1" className='text-for-company-admin' sx={{mb: 5}}>
        Admin
      </Typography>


      <Link to="/Admin" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<DashboardIcon />} sx={buttonStyle('dashboard')}>
          Dashboard
        </Button>
      </Link>

      <Button
        fullWidth
        onClick={handleOpen}
        startIcon={<PersonIcon />}
        endIcon={handleChange()}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textTransform: 'none',
          color: open ? 'blue' : 'black',
          borderRadius: '10px',
          mb: 1,
          fontSize: '16px',
          gap: 3,
          px: 2,
          py: 1.5,
          '&:hover': {
            backgroundColor: open ? '#deeaf8ff' : '#e0e0e0',
          },
        }}
      >
        Manage Users
      </Button>

      {open && 
        <Box sx={{ pl: 3 }}>
          <Link to="/Admin/Customer" style={{ textDecoration: 'none' }}>
            <Button fullWidth startIcon={<PeopleIcon />} sx={buttonStyle('Customer')}>
              Customer
            </Button>
          </Link>

          <Link to="/Admin/Staff" style={{ textDecoration: 'none' }}>
            <Button fullWidth startIcon={<PeopleIcon  />} sx={buttonStyle('Staff')}>
              Staff
            </Button>
          </Link>
        </Box>
      }

      <Link to="/Admin/Category" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<EventNoteOutlinedIcon/>} sx={buttonStyle('Category')}>
          Category
        </Button>
      </Link>

      <Link to="/Admin/ManageTour" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<EventNoteOutlinedIcon/>} sx={buttonStyle('ManageTour')}>
          Manage Tour
        </Button>
      </Link>

      <Link to="/Admin/CancelRequest" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<EventNoteOutlinedIcon />} sx={buttonStyle('CancelRequest')}>
          Cancel Request
        </Button>
      </Link>

      <Link to="/Admin/ManageOrders" style={{ textDecoration: 'none' }}>
        <Button fullWidth startIcon={<PaidIcon />} sx={buttonStyle('ManageOrders')}>
          Manage Orders
        </Button>
      </Link>

    </Box>
  );
};

export default DrawerForAdmin;
