import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register, resetStatus } from '../../Redux/ReduxAuth/Slice/authSlice';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BgImage from '../../assets/room1.jpg'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VerifyEmail from './VerifyEmail';

const Register = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [phone, setPhone] = useState('')
      const [address, setAddress] = useState('')
      const [showPassword, setShowPassword] = useState(false)
      const [openDialog, setOpenDialog] = useState(false)
  
      const auth = useSelector((state) => state.auth);
  
      const navigate = useNavigate();
      const dispatch = useDispatch();
  
      const handleShowPassword = () => {
          setShowPassword(prev => !prev)
      }

      const handleClose = () => {
        setOpenDialog(false)
      }

    useEffect(() => {
        if (auth.status === 'succeeded') {
        setTimeout(() => {
            dispatch(resetStatus()); 
            setOpenDialog(true)
            // navigate('/Login', { state: { success: true } });
        }, 1500);
        }
    }, [auth.status, dispatch, navigate]);

      const handleSubmit = () => {
        dispatch(register({
            email,
            password,
            display_name: name,
            phone_number: phone,
            detail_address: address,
        }));
        console.log({name, email, password, phone, address})
      }; 
  
      return (
          <Box sx={{
              backgroundImage: `url(${BgImage})`, 
              width: '100%',
              height: '130vh',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center'
          }}
          >
            
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Card 
                  sx={{ 
                      width: 650, 
                      height: 870, 
                  }}
                  >
                      <CardContent>
                      <Typography gutterBottom variant="h4" component="div" sx={{margin: 2, fontWeight: '600'}}>
                          Đăng Ký Tài Khoản
                      </Typography>
                      <Divider sx={{ margin: 3, borderColor: 'lightgray' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary', margin: 2, marginTop: 4 }}>
                          <form onSubmit={handleSubmit}>
                              <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                  <Typography sx={{color: 'red'}}>*</Typography>
                                  <Typography sx={{color: 'black'}}>Họ và Tên</Typography>
                              </Box>
                              <Box>
                                <input 
                                  placeholder="Name" 
                                  name="name" 
                                  type="text" 
                                  value={name} 
                                  onChange={(e) => setName(e.target.value)}
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
                                />
                              </Box><br />

                              <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                  <Typography sx={{color: 'red'}}>*</Typography>
                                  <Typography sx={{color: 'black'}}>Email</Typography>
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
                                />
                              </Box><br />
  
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography sx={{ color: 'red' }}>*</Typography>
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
                                  paddingRight: 45 // chừa chỗ cho icon
                                  }}
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
                                  backgroundColor: 'white',
                                  }}
                                >
                                <Button onClick={handleShowPassword} sx={{ minWidth: 'auto', padding: 0 }}>
                                {showPassword ? (
                                    <VisibilityIcon sx={{ height: 23, color: 'black' }} />
                                ) : (
                                    <VisibilityOffIcon sx={{ height: 23, color: 'black' }} />
                                )}
                                </Button>
                                </Box>
                              </Box>
                              <br />

                              <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                  <Typography sx={{color: 'red'}}>*</Typography>
                                  <Typography sx={{color: 'black'}}>Điện thoại</Typography>
                              </Box>
                              <Box>
                                <input 
                                  placeholder="Phone Number" 
                                  name="phone" 
                                  type="number" 
                                  value={phone} 
                                  onChange={(e) => setPhone(e.target.value)}
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
                                />
                              </Box><br />

                              <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                  <Typography sx={{color: 'red'}}>*</Typography>
                                  <Typography sx={{color: 'black'}}>Địa chỉ</Typography>
                              </Box>
                              <Box>
                                <input 
                                  placeholder="Address" 
                                  name="address" 
                                  type="text" 
                                  value={address} 
                                  onChange={(e) => setAddress(e.target.value)}
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
                                />
                              </Box><br />

                              <Box>
                                  <Button 
                                      onClick={handleSubmit}
                                      variant="contained"
                                  >
                                      Đăng Ký
                                  </Button><br />
                                  {auth.status === 'succeeded' && <Typography sx={{ color: 'green', fontSize: '14px'}}>Đăng ký thành công!</Typography>}
                                  {auth.error && <Typography sx={{ color: 'red', fontSize: '14px'}}>{auth.error}</Typography>} 
                              </Box>
                              <Divider sx={{ margin: 3, mt: 1, borderColor: 'lightgray' }} >
                              <Typography style={{ 
                                  textAlign: 'center',
                                  color: 'black',
                                  fontWeight: '600'
                              }}
                              >
                                  Or
                              </Typography>
                              </Divider>
                              <Typography style={{ 
                                  color: 'black',
                                  margin: 3
                              }}
                              >
                                  <Typography sx={{display: 'flex', gap: 1 }}>
                                      Đã có tài khoản ?
                                      <Link to="/Login" state={{ success: true }} style={{ textDecoration: 'none'}}> 
                                          Đăng Nhập ngay
                                      </Link>                         
                                  </Typography> 
                              </Typography>
                              <Typography sx={{marginTop: '20px'}}>
                                  <Link to="/" style={{ textDecoration: 'none', margin: 3}}>Quay về trang chủ</Link>
                              </Typography>
                          </form>
                      </Typography>
                      </CardContent>
                  </Card>
            </Box>
            <VerifyEmail 
                openDialog={openDialog}
                handleCloseDialog={handleClose}
            />
          </Box>
      )
}

export default Register
