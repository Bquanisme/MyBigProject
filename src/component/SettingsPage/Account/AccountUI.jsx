import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dog from '../../../assets/cho.jpg';
import { getDetailUser, postEditUser } from '../../../Redux/ReduxAuth/Slice/editUserSlice';

const AccountUI = () => {
  const userDetail = useSelector((state) => state.editUser.userDetail);
  const id = useSelector((state) => state.editUser.userDetail.id);
  console.log(id)
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageFile, setImageFile] = useState([]);  

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(null);

  useEffect(() => {
    if (userDetail?.display_name) setName(userDetail.display_name);
    if (userDetail?.email) setEmail(userDetail.email);
    if (userDetail?.phone_number) setPhoneNumber(userDetail.phone_number);
    if (userDetail?.detail_address) setAddress(userDetail.detail_address);
  }, [userDetail]);

  const validate = () => {
    let isValid = true;

    if (!name) {
      setNameError('Tên không được để trống');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!phoneNumber) {
      setPhoneError('Số điện thoại không được để trống');
      isValid = false;
    } else if (!/^\d{10,11}$/.test(phoneNumber)) {
      setPhoneError('Số điện thoại không hợp lệ');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!address) {
      setAddressError('Địa chỉ không được để trống');
      isValid = false;
    } else {
      setAddressError('');
    }

    return isValid;
  };

  const handleAvatarChange = (e) => {
    const file = (e.target.files[0]);
    console.log(file)
    setImageFile(file); 
  };

  const handlePreviewImage = () => {
    //src={imageFile instanceof File ? URL.createObjectURL(imageFile) : userDetail?.avatar}
    if(imageFile instanceof File){
      return URL.createObjectURL(imageFile)
    }

    return userDetail?.avatar ? userDetail?.avatar : dog
  }

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      dispatch(postEditUser({
          id: userDetail?.id,
          data: {
            display_name: name,
            phone_number: phoneNumber,
            detail_address: address,
            image_delete: imageFile ? true : false,
            image_data: imageFile, 
          },
        })
      ).unwrap();

      dispatch(getDetailUser(id));
      setSubmitSuccess(true);
      setSubmitMessage('Cập nhật thông tin thành công!');
    } catch (error) {
      console.error(error);
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
                  <Box sx={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                    {/* Cột 1 */}
                    <Box sx={{ flex: 1, minWidth: '250px' }}>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography sx={{ color: 'red' }}>*</Typography>
                          <Typography>Tài khoản</Typography>
                        </Box>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{
                            width: '100%',
                            margin: 3,
                            marginTop: 15,
                            height: '40px',
                            borderRadius: '7px',
                            border: nameError ? '1px solid red' : '1px solid lightgrey',
                            paddingLeft: 12,
                            fontSize: '17px',
                          }}
                        />
                        {nameError && (
                          <Typography color="error" fontSize="14px" ml={1}>
                            {nameError}
                          </Typography>
                        )}
                      </Box>

                      <Box mt={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography sx={{ color: 'red' }}>*</Typography>
                          <Typography>Số điện thoại</Typography>
                        </Box>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          style={{
                            width: '100%',
                            margin: 3,
                            marginTop: 15,
                            height: '40px',
                            borderRadius: '7px',
                            border: phoneError ? '1px solid red' : '1px solid lightgrey',
                            paddingLeft: 12,
                            fontSize: '17px',
                          }}
                        />
                        {phoneError && (
                          <Typography color="error" fontSize="14px" ml={1}>
                            {phoneError}
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    {/* Cột 2 */}
                    <Box sx={{ flex: 1, minWidth: '250px' }}>
                      <Box>
                        <Typography>Email</Typography>
                        <input
                          type="text"
                          value={email}
                          disabled
                          style={{
                            width: '100%',
                            margin: 3,
                            backgroundColor: 'lightgray',
                            marginTop: 15,
                            height: '40px',
                            borderRadius: '7px',
                            border: '1px solid lightgrey',
                            paddingLeft: 12,
                            fontSize: '17px',
                          }}
                        />
                      </Box>

                      <Box mt={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography sx={{ color: 'red' }}>*</Typography>
                          <Typography>Địa chỉ</Typography>
                        </Box>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          style={{
                            width: '100%',
                            margin: 3,
                            marginTop: 15,
                            height: '40px',
                            borderRadius: '7px',
                            border: addressError ? '1px solid red' : '1px solid lightgrey',
                            paddingLeft: 12,
                            fontSize: '17px',
                          }}
                        />
                        {addressError && (
                          <Typography color="error" fontSize="14px" ml={1}>
                            {addressError}
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    {/* Cột 3 */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flexDirection: 'column',
                        pr: 2,
                      }}
                    >
                      <Box
                      sx={{
                        width: '250px',
                        height: '250px',
                      }}
                      >
                        <img
                        src={handlePreviewImage()}
                        alt="Avatar"
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      </Box>

                      <input
                        type="file"
                        accept="image/*"
                        id="avatar-upload"
                        style={{ display: 'none' }}
                        onChange={handleAvatarChange}
                      />

                      <label htmlFor="avatar-upload">
                        <Button
                          component="span"
                          variant="outlined"
                          color="primary"
                          sx={{ textTransform: 'none' }}
                        >
                          Đổi avatar
                        </Button>
                      </label>
                    </Box>
                  </Box>

                  {/* Nút */}
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: 'red',
                        mt: 2,
                        ml: 0.5,
                        textTransform: 'none',
                      }}
                    >
                      Chỉnh sửa thông tin
                    </Button>

                    {submitMessage && (
                      <Typography
                        sx={{
                          mt: 2,
                          ml: 1,
                          color: submitSuccess ? 'green' : 'red',
                          fontSize: '17px',
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

export default AccountUI;
