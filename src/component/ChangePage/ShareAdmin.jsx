import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import LayoutWithAdmin from '../Admin/NavbarForAdmin/LayoutWithAdmin';

const ShareAdmin = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <LayoutWithAdmin />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ShareAdmin;
