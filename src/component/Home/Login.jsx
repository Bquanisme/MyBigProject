import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/ReduxAuth/Slice/authSlice';
import {
  Box,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material';
import BgImage from '../../assets/news4.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.success) {
      const timeout = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [location, navigate]);

  useEffect(() => {
    if (auth.user) {
      navigate('/User');
    }
  }, [auth.user, navigate]);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password, device_token: 'xxx111xxx' }));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage})`,
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ width: 650 }}>
          <CardContent sx={{height: '100%'}}>
            <Typography gutterBottom variant="h4" sx={{ m: 2, fontWeight: '600' }}>
              Đăng nhập
            </Typography>
            <Divider sx={{ m: 3, borderColor: 'lightgray' }} />

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography>
                <Typography sx={{ color: 'black' }}>Email</Typography>
              </Box>
              <Box>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    margin: 3,
                    marginTop: 15,
                    height: '40px',
                    borderRadius: '7px',
                    borderStyle: 'solid',
                    borderColor: 'lightgrey',
                    paddingLeft: 12
                  }}
                  required
                />
              </Box>
              <br />

              {/* Password */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                <Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography>
                <Typography sx={{ color: 'black' }}>Mật khẩu</Typography>
              </Box>

              <Box sx={{ position: 'relative' }}>
                <input
                  placeholder="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    margin: 3,
                    marginTop: 15,
                    height: '40px',
                    borderRadius: '7px',
                    borderStyle: 'solid',
                    borderColor: 'lightgrey',
                    paddingLeft: 12,
                    paddingRight: 45
                  }}
                  required
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 7,
                    transform: 'translateY(-30%)',
                    borderRadius: '7px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    backgroundColor: 'white'
                  }}
                >
                  <Button
                    onClick={handleShowPassword}
                    sx={{ minWidth: 'auto', padding: 0 }}
                  >
                    {showPassword ? (
                      <VisibilityIcon sx={{ height: 23, color: 'black' }} />
                    ) : (
                      <VisibilityOffIcon sx={{ height: 23, color: 'black' }} />
                    )}
                  </Button>
                </Box>
              </Box>

              <br /><br />
              {/* Submit */}
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={auth.status === 'loading'}
                  sx={{ml: 0.5}}
                >
                  {auth.status === 'loading' ? (
                    <CircularProgress size={20} sx={{ color: 'white', textTransform: 'none' }} />
                  ) : (
                    <Typography sx={{ color: 'white', textTransform: 'none'}}>Đăng nhập</Typography>
                  )}
                </Button>
                {auth.error && (
                  <Typography sx={{ color: 'red', margin: 0.5, marginTop: 1 }}>
                    {auth.error}
                  </Typography>
                )}
              </Box>
              <br />

              <Divider sx={{ m: 3, borderColor: 'lightgray' }}>
                <Typography
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: '600'
                  }}
                >
                  Or
                </Typography>
              </Divider>

              {/* Links */}
              <Typography style={{ color: 'black', margin: 3 }}>
                <Typography sx={{ display: 'flex', gap: 1 }}>
                  Chưa có tài khoản ?
                  <Link to="/Register" style={{ textDecoration: 'none' }}>
                    Đăng ký
                  </Link>
                </Typography>
              </Typography>
              <Typography sx={{ mt: '20px', display: 'flex', alignItems: 'center', gap: 1}}>
                <Link to="/" style={{ textDecoration: 'none', margin: 3 }}>
                  Quay về trang chủ
                </Link>
                <Typography>/</Typography>
                <Link to='/LoginAdmin' style={{ textDecoration: 'none', margin: 3 }}>Đăng nhập Admin</Link>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
