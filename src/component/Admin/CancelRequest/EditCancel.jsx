import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useDispatch } from "react-redux";
import {
  getAdminRequestCancel,
  postAdminUpdateStatusCancel,
} from "../../../Redux/ReduxAuth/Slice/adminSlice";

const EditCancel = ({ id, status }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

  const dispatch = useDispatch();

  const handleEdit = async () => {
    try {
      await dispatch(
        postAdminUpdateStatusCancel({
          id,
          data: { status },
        })
      ).unwrap();
      await dispatch(getAdminRequestCancel());

      setOpenDialog(false);
      setAlert({
        open: true,
        message: "Cập nhật trạng thái thành công!",
        severity: "success",
      });
    } catch (err) {
      setAlert({
        open: true,
        message: err?.message || "Có lỗi xảy ra khi cập nhật!",
        severity: "error",
      });
    }
  };

  const handleClick = () => {
    if (status === "pending") {
      setOpenDialog(true);
    } else {
      setAlert({
        open: true,
        message: "Chỉ có thể cập nhật khi trạng thái là pending!",
        severity: "error",
      });
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
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
                <Typography sx={{ color: "black" }}>Select Status Order</Typography>
                <input
                  name="status"
                  type="text"
                  value={status}
                  readOnly
                  style={{
                    width: 200,
                    marginTop: 15,
                    height: "40px",
                    fontSize: "16px",
                    borderRadius: "7px",
                    border: "1px solid lightgrey",
                    paddingLeft: 12,
                    marginBottom: 50,
                  }}
                  required
                />
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

      {/* Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditCancel;
