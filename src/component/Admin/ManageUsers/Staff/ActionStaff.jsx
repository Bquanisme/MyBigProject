import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useDispatch } from "react-redux";
import DeleteStaff from "./DeleteStaff";
import { deleteStaff, getAdminStaff } from "../../../../Redux/ReduxAuth/Slice/adminSlice";
import EditStaff from "./EditStaff";

const Action = ({ id }) => {
  const [openConfirm, setOpenConfirm] = useState(false); 
  const [openDialog, setOpenDialog] = useState(false); 

  const dispatch = useDispatch();

  const handleConfirmDelete = async () => {
    await dispatch(deleteStaff([id]));
    setOpenConfirm(false);
    dispatch(getAdminStaff());
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {/* Nút delete */}
      <DeleteOutlineIcon
        onClick={() => setOpenConfirm(true)}
        sx={{
          color: "red",
          fontSize: 22,
          cursor: "pointer",
          "&:hover": { opacity: 0.7 },
        }}
      />

      <BorderColorIcon
        onClick={() => setOpenDialog(true)}
        sx={{
          color: "green",
          fontSize: 22,
          cursor: "pointer",
          "&:hover": { opacity: 0.7 },
        }}
      />

      {/* Dialog Edit */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            position: "absolute",
            top: 80,
            borderRadius: 2,
            width: 750,
          },
        }}
      >
        <EditStaff close={() => setOpenDialog(false)} id={id} />
      </Dialog>

      {/* Dialog Confirm */}
      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        PaperProps={{
          sx: { borderRadius: 2, width: 400 },
        }}
      >
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc muốn xóa nhân viên này?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)}>Hủy</Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Action;
