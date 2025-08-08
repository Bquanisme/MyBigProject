import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TravelLogo from '../../assets/TravelLogo.jpg';
import '../../AllCss/Navbar.css';
import dog from '../../assets/cho.jpg';
import ScrollDialog from '../ContactPage/ScrollDialog';
import {
  Button,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/ReduxAuth/Slice/authSlice';

const NavbarForUser = () => {
  const [open, setOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const anchorRef = useRef(null);
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user)
  console.log(user)

  const navigate = useNavigate();

  const handleToggle = () => {
    setOpenTask((prev) => !prev);
  };

  const handleClose = () => {
    setOpenTask(false);
  };


  const handleNavigateSettings = () => {
    navigate('Settings');
    handleClose();
  };

//   LogoutButton
  const handleLogout = () => {
    // console.log('Đã đăng xuất');
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="Background">
      <div className="container">
        {/* Logo */}
        <div>
          <img src={TravelLogo} alt="" className="ChangeLogo" />
        </div>

        {/* Navigation */}
        <div className="nav">
          <div>
            <Link to="/User">
              <Button style={{ color: 'white' }}>Trang chủ</Button>
            </Link>
          </div>
          <div>
            <Link to="Room">
              <Button style={{ color: 'white' }}>Room</Button>
            </Link>
          </div>
          <div>
            <Link to="Tour">
              <Button style={{ color: 'white' }}>Tour</Button>
            </Link>
          </div>
          <div>
            <Link to="News">
              <Button style={{ color: 'white' }}>Tin tức</Button>
            </Link>
          </div>
          <div>
            <ScrollDialog handleClickOpen={setOpen} />
          </div>
        </div>

        {/* User Section */}
        <div className="text">
          {user?.avatar ? <img src={user?.avatar} alt="user" className="user" /> : <img src={dog} alt="user" className="user" />}
          <Typography
            onClick={handleToggle}
            ref={anchorRef}
            sx={{
              cursor: 'pointer',
              color: 'white',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {user?.display_name || 'Username default'} 
          </Typography>
          <ArrowDropDownIcon onClick={handleToggle} sx={{
            color: 'white', 
            '&:hover': {
            backgroundColor: 'gray',
            color: 'white',
            cursor: 'pointer',
            },
            }}
          />

          <Menu
            anchorEl={anchorRef.current}
            open={openTask}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'account-menu' }}
          >
            <MenuItem onClick={handleNavigateSettings}>Cài đặt</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavbarForUser;
