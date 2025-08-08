import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import LayoutWithNavbar from '../Home/LayoutWithNavbar';


const ShareSettings = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <LayoutWithNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ShareSettings;
