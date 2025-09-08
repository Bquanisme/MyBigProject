import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Avatar,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminStaff,
  getDetailAdminStaff,
  postAdminEditStaff,
} from "../../../../Redux/ReduxAuth/Slice/adminSlice";

const EditStaff = ({ close, id }) => {
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [roleId, setRoleId] = useState("");
  const [imageData, setImageData] = useState(null);
  const [imageDelete, setImageDelete] = useState(false);
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.admin.staffDetail);

  useEffect(() => {
    dispatch(getDetailAdminStaff(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (detail) {
      setDisplayName(detail.display_name || "");
      setPhoneNumber(detail.phone_number || "");
      setRoleId(detail.role_id || "");
      setDetailAddress(detail.detail_address || "");
      setPreview(detail.avatar || null);
    }
  }, [detail]);

  const handleEdit = async () => {
    await dispatch(
      postAdminEditStaff({
        id,
        data: {
          password,
          display_name: displayName,
          phone_number: phoneNumber,
          detail_address: detailAddress,
          role_id: roleId,
          image_data: imageData,
          image_delete: imageDelete,
        },
      })
    );
    dispatch(getAdminStaff());
    close();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageData(file);
      setPreview(URL.createObjectURL(file));
      setImageDelete(true);
    }
  };

  const handleRemoveImage = () => {
    setImageData(null);
    setPreview(null);
    setImageDelete(true);
  };

  return (
    <>
      <DialogTitle>Chỉnh sửa nhân viên</DialogTitle>
      <DialogContent dividers>
        {/* Avatar */}
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Avatar src={preview || ""} sx={{ width: 80, height: 80 }} />
          <Box>
            <Button variant="outlined" component="label">
              Upload ảnh
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            {preview && (
              <Button
                variant="text"
                color="error"
                sx={{ ml: 1 }}
                onClick={handleRemoveImage}
              >
                Xóa ảnh
              </Button>
            )}
          </Box>
        </Box>

        <TextField
          label="Tên hiển thị"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          fullWidth
          margin="dense"
        />

        <TextField
          label="Số điện thoại"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="dense"
        />

        <TextField
          label="Địa chỉ chi tiết"
          value={detailAddress}
          onChange={(e) => setDetailAddress(e.target.value)}
          fullWidth
          margin="dense"
        />

        <TextField
          label="Mật khẩu (để trống nếu không đổi)"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          select
          label="Vai trò"
          value={roleId}
          onChange={(e) => setRoleId(e.target.value)}
          fullWidth
          margin="dense"
        >
          <MenuItem value="1">Admin</MenuItem>
          <MenuItem value="3">Staff</MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={close} sx={{textTransform: 'none'}}>Hủy</Button>
        <Button onClick={handleEdit} variant="contained" color="primary" sx={{textTransform: 'none'}}>
          Lưu
        </Button>
      </DialogActions>
    </>
  );
};

export default EditStaff;
