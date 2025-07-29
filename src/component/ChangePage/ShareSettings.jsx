import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DrawerForSettings from '../Home/DrawerForSettings';

const ShareSettings = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <DrawerForSettings />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ShareSettings;
