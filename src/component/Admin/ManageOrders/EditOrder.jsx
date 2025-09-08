import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  Divider,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useDispatch } from "react-redux";
import {
  getAdminOrder,
  postAdminUpdateStatusOrder,
} from "../../../Redux/ReduxAuth/Slice/adminSlice";

const EditOrder = ({ id, status }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [newStatus, setNewStatus] = useState(status || "pending");
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = async () => {
    await dispatch(
      postAdminUpdateStatusOrder({
        id,
        data: { status: newStatus },
      })
    ).unwrap();
    await dispatch(getAdminOrder());
    setOpenDialog(false);
  };

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  // mở menu khi click vào input
  const handleInputClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value) => {
    setNewStatus(value);
    handleMenuClose();
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <BorderColorIcon
        onClick={handleClick}
        sx={{
          color: "green",
          fontSize: 22,
          cursor: "pointer",
          "&:hover": { opacity: 0.7 },
        }}
      />

      <Dialog
        maxWidth="sm"
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          sx: {
            position: "absolute",
            top: 80,
            borderRadius: 2,
            width: 450,
          },
        }}
      >
        <Box margin="20px">
          <Typography
            fontWeight="600"
            color="black"
            mb={0.5}
            textAlign="left"
            fontSize="18px"
            margin="10px"
            marginLeft="12px"
          >
            Update Status Order
          </Typography>
          <Divider variant="middle" sx={{ my: 2 }} />

          <form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box ml={1.5}>
                <Typography sx={{ color: "black", mb: 1 }}>
                  Select Status Order
                </Typography>

                {/* input nhưng click ra menu */}
                <TextField
                  value={newStatus}
                  InputProps={{ readOnly: true }}
                  onClick={handleInputClick}
                  sx={{ width: 200, mb: 6 }}
                />

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleSelect("access")}>
                    Access
                  </MenuItem>
                  <MenuItem onClick={() => handleSelect("cancel")}>
                    Cancel
                  </MenuItem>
                  <MenuItem onClick={() => handleSelect("ending")}>
                    Ending
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

            <DialogActions>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", color: "grey", borderColor: "lightgray" }}
                onClick={handleClose}
              >
                Hủy
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                onClick={handleEdit}
              >
                Cập nhật
              </Button>
            </DialogActions>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
};

export default EditOrder;
