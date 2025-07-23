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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  // const handleToggle = () => {
  //   setOpenTask((prev) => !prev);
  // };

  const handleClose = () => {
    setOpenTask(false);
  };

  const handleNavigateProfile = () => {
    navigate('/Login');
    handleClose();
  };

  // const handleNavigateSettings = () => {
  //   navigate('/settings');
  //   handleClose();
  // };

  // const handleLogout = () => {
  //   // Xử lý logout ở đây
  //   console.log('Đã đăng xuất');
  //   navigate('/login');
  //   handleClose();
  // };

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
            <Link to="/">
              <Button style={{ color: 'white' }}>Trang chủ</Button>
            </Link>
          </div>
          <div>
            <Link to="/Room">
              <Button style={{ color: 'white' }}>Room</Button>
            </Link>
          </div>
          <div>
            <Link to="/Tour">
              <Button style={{ color: 'white' }}>Tour</Button>
            </Link>
          </div>
          <div>
            <Link to="/News">
              <Button style={{ color: 'white' }}>Tin tức</Button>
            </Link>
          </div>
          <div>
            <ScrollDialog handleClickOpen={setOpen} />
          </div>
        </div>

        {/* User Section */}
        <div className="text">
          <img src={dog} alt="user" className="user" />
          <Typography
            ref={anchorRef}
            // onClick={handleToggle}
            onClick={handleNavigateProfile}
            sx={{
              cursor: 'pointer',
              color: 'white',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Đăng nhập 
          </Typography>

          {/* <Menu
            anchorEl={anchorRef.current}
            open={openTask}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'account-menu' }}
          >
            <MenuItem sx={{width: '120px'}} onClick={handleNavigateProfile}>
              Đăng nhập
            </MenuItem>
            <MenuItem onClick={handleNavigateSettings}>Cài đặt</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
