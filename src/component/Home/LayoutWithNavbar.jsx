import React, { useState, useRef } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/ReduxAuth/Slice/authSlice';
import DrawerForSettings from './Drawer/DrawerForSettings';
import dog from '../../assets/cho.jpg'

const drawerWidth = 270;

const LayoutWithNavbar = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleNavigateHome = () => {
    navigate('/User');
    setMenuOpen(false);
  };

  return (
  <Box>
    <CssBaseline />

    {/* AppBar */}
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: '#f5f5f5',
        width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
        ml: drawerOpen ? `${drawerWidth}px` : 0,
        transition: 'width 0.3s ease, margin 0.3s ease',
        borderBottom: 'solid 1px lightgrey',
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color="black"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {user?.avatar ? (
              <img
                src={user?.avatar}
                alt="avatar"
                style={{ width: 32, height: 32, borderRadius: '50%' }}
              />
          ) : (
              <img
                src={dog}
                alt="avatar"
                style={{ width: 32, height: 32, borderRadius: '50%' }}
              />
          )}
          <Typography
            ref={anchorRef}
            onClick={handleMenuToggle}
            sx={{ cursor: 'pointer', userSelect: 'none', color: 'black' }}
          >
            {user?.display_name || 'User'}
          </Typography>
          <ArrowDropDownIcon
            onClick={handleMenuToggle}
            sx={{ cursor: 'pointer', color: 'black', '&:hover': { color: 'gray' } }}
          />
          <Menu
            anchorEl={anchorRef.current}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <MenuItem onClick={handleNavigateHome}>Trang chủ</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>

    {/* Drawer */}
    {drawerOpen && (
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          transition: 'margin 0.3s ease',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#b0bec5',
          },
        }}
      >
        <DrawerForSettings />
      </Drawer>
    )}

    {/* Main Content */}
    <Box
      component="main"
      sx={{
        transition: 'margin 0.3s ease',
        ml: drawerOpen,
        overflow: 'auto',
        bgcolor: '#b0bec5',
        pt: 8,
      }}
    >
      {children}
    </Box>
  </Box>
);

};

export default LayoutWithNavbar;
