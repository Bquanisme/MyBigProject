import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  MenuItem,
  Avatar,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getAdminStaff, postAdminCreateStaff } from "../../../../Redux/ReduxAuth/Slice/adminSlice";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const NewStaff = ({ open, onClose }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [roleId, setRoleId] = useState("");
  const [imageData, setImageData] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageData(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch(postAdminCreateStaff({
        email,
        password,
        display_name: displayName,
        phone_number: phoneNumber,
        detail_address: detailAddress,
        role_id: roleId,
        image_data: imageData,
    }))
    dispatch(getAdminStaff())
    onClose();
    setEmail('');
    setPassword('');
    setDisplayName('');
    setPhoneNumber('');
    setDetailAddress('');
    setRoleId('');
    setImageData(null);
    setPreview(null);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: 3, width: 600 } }}
    >
      <DialogTitle>Thêm nhân viên mới</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              size="small"
            />
            <Box sx={{ position: 'relative' }}>
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                size="small"
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 7,
                  transform: 'translateY(-50%)',
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
            <TextField
              label="Tên hiển thị"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              label="Số điện thoại"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              size="small"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <TextField
              label="Địa chỉ chi tiết"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              select
              label="Role"
              value={roleId}
              onChange={(e) => setRoleId(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="1">Admin</MenuItem>
              <MenuItem value="3">Staff</MenuItem>
            </TextField>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button variant="outlined" component="label">
                Upload Ảnh
                <input hidden accept="image/*" type="file" onChange={handleFileChange} />
              </Button>
              {preview && <Avatar src={preview} sx={{ width: 56, height: 56 }} />}
            </Box>
          </Box>
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} sx={{textTransform: 'none'}}>Hủy</Button>
        <Button onClick={handleSubmit} variant="contained" sx={{textTransform: 'none'}}>
          Tạo mới
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewStaff;
