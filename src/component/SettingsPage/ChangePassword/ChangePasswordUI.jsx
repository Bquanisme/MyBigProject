import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postEditPasswordUser} from '../../../Redux/ReduxAuth/Slice/editUserSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ChangePasswordUI = () => {
  const id = useSelector((state) => state.editUser.userDetail.id);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [showPassword3, setShowPassword3] = useState(false)
  const [checkNewPassword, setCheckNewPassword] = useState('');

  const [passwordError, setPasswordeError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [checkNewPasswordError, setCheckNewPasswordError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(null);


    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleShowPassword2 = () => {
        setShowPassword2(prev => !prev)
    }

    const handleShowPassword3 = () => {
        setShowPassword3(prev => !prev)
    }

  const validate = () => {
    let isValid = true;

    if (!password) {
      setPasswordeError('Mật khẩu không chính xác! Vui lòng nhập lại');
      isValid = false;
    } 
    else {
      setPasswordeError('');
    }

    if (!newPassword) {
      setNewPasswordError('Mật khẩu mới không được để trống!');
      isValid = false;
    } else {
      setNewPasswordError('');
    }

    if (checkNewPassword !== newPassword) {
      setCheckNewPasswordError('Xác nhận mật khẩu mới không được để trống!');
      isValid = false;
    } else {
      setNewPasswordError('');
    }
    return isValid;
    
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    dispatch(postEditPasswordUser({
      id: id,
      password: password,
      newPassword: newPassword, 
    })).unwrap();

    setSubmitSuccess(true);
    setSubmitMessage('Cập nhật thông tin thành công!');
  } catch (error) {
    setSubmitSuccess(false);
    setSubmitMessage('Có lỗi xảy ra, vui lòng thử lại!');
    setTimeout(() => {
      setSubmitMessage(''); 
      setSubmitSuccess(null); 
    }, 5000);
  }
};

  return (
    <Box sx={{ bgcolor: '#f5f5f5', width: '100%', minHeight: '100vh' }}>
      <Box sx={{ p: 13 }}>
        <Box sx={{ gap: 2, width: '100%' }}>
          <Box sx={{ gap: 5, pt: 3 }}>
            <Box
              sx={{
                width: '100%',
                bgcolor: '#fff',
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden',
                mt: 1,
                mb: 2,
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" fontSize="25px" m={3} mb={1}>
                Thông tin cá nhân
              </Typography>
              <Typography variant="body2" fontSize="16px" m={3} mt={0}>
                Quản lý thông tin cá nhân
              </Typography>

              <Divider sx={{ margin: 3, mb: 1, borderColor: 'lightgray' }} />

              <Box sx={{ p: 3, pt: 1 }}>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, flexWrap: 'wrap' }}>

                    <Box sx={{ flex: 1, minWidth: '250px' }}>
                      <Box ml={1}>
                        <Box
                            sx={{
                            position: 'relative',
                            width: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1
                            }}
                        >
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography sx={{color: 'red'}}>*</Typography>
                                <Typography>Mật khẩu hiện tại</Typography>
                            </Box>
                            <input 
                            type={showPassword ? 'text' : 'password'} 
                            name='name'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}  
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '10px',
                                paddingRight: '40px',
                                border: '1px solid #ccc',
                                borderRadius: '7px',
                                fontSize: '14px',
                            }}
                            />
                            <Button
                            onClick={handleShowPassword}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: '5px',
                                transform: 'translateY(0%)',
                                minWidth: 'auto',
                                padding: 0,
                                width: '30px',
                                height: '30px',
                                backgroundColor: '#fff',
                            }}
                            >
                            {showPassword ? (
                                <VisibilityIcon sx={{ height: 23, color: 'gray' }} />
                            ) : (
                                <VisibilityOffIcon sx={{ height: 23, color: 'gray' }} />
                            )}
                            </Button>
                        </Box>
                        {passwordError && <Typography color="error" fontSize="14px" ml={1}>{passwordError}</Typography>}
                      </Box>

                      <Box mt={4} ml={1}>
                        <Box
                            sx={{
                            position: 'relative',
                            width: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1
                            }}
                        >
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography sx={{color: 'red'}}>*</Typography>
                                <Typography>Mật khẩu mới</Typography>
                            </Box>
                            <input 
                            type={showPassword2 ? 'text' : 'password'} 
                            name='name'
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)}  
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '10px',
                                paddingRight: '40px',
                                border: '1px solid #ccc',
                                borderRadius: '7px',
                                fontSize: '14px',
                            }}
                            />
                            <Button
                            onClick={handleShowPassword2}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: '5px',
                                transform: 'translateY(0%)',
                                minWidth: 'auto',
                                padding: 0,
                                width: '30px',
                                height: '30px',
                                backgroundColor: '#fff',
                            }}
                            >
                            {showPassword2 ? (
                                <VisibilityIcon sx={{ height: 23, color: 'gray' }} />
                            ) : (
                                <VisibilityOffIcon sx={{ height: 23, color: 'gray' }} />
                            )}
                            </Button>
                        </Box>
                        {newPasswordError && <Typography color="error" fontSize="14px" ml={1}>{newPasswordError}</Typography>}
                      </Box>

                      <Box mt={4} ml={1}>
                        <Box
                            sx={{
                            position: 'relative',
                            width: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1
                            }}
                        >
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography sx={{color: 'red'}}>*</Typography>
                                <Typography>Xác nhận mật khẩu mới</Typography>
                            </Box>
                            <input 
                            type={showPassword3 ? 'text' : 'password'} 
                            name='name'
                            value={checkNewPassword} 
                            onChange={(e) => setCheckNewPassword(e.target.value)}  
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '10px',
                                paddingRight: '40px',
                                border: '1px solid #ccc',
                                borderRadius: '7px',
                                fontSize: '14px',
                            }}
                            />
                            <Button
                            onClick={handleShowPassword3}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: '5px',
                                transform: 'translateY(0%)',
                                minWidth: 'auto',
                                padding: 0,
                                width: '30px',
                                height: '30px',
                                backgroundColor: '#fff',
                            }}
                            >
                            {showPassword3 ? (
                                <VisibilityIcon sx={{ height: 23, color: 'gray' }} />
                            ) : (
                                <VisibilityOffIcon sx={{ height: 23, color: 'gray' }} />
                            )}
                            </Button>
                        </Box>
                        {checkNewPasswordError && <Typography color="error" fontSize="14px" ml={1}>{checkNewPasswordError}</Typography>}
                      </Box>
                    </Box>
                  </Box>

                  {/* Nút */}
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: 'red',
                        mt: 3,
                        ml: 1,
                        textTransform: 'none',
                      }}
                      onClick={handleSubmit}
                    >
                      Chỉnh sửa thông tin
                    </Button>

                    {submitMessage && (
                      <Typography
                        sx={{
                          mt: 2,
                          ml: 1,
                          color: submitSuccess ? 'green' : 'red',
                          fontSize: '17px'
                        }}
                      >
                        {submitMessage}
                      </Typography>
                    )}
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePasswordUI;
