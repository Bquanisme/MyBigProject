import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';
import NavbarForUser from '../Home/NavbarForUser';

const ShareLayout = () => {
  return (
    <>
      <NavbarForUser/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default ShareLayout;
