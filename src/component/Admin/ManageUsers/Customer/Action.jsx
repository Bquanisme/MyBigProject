import React, { useState } from "react";
import {
  Box,
  Popover,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getAdminCustomer, postUpdateStatus } from "../../../../Redux/ReduxAuth/Slice/adminSlice";
import EditCheck from "./EditCheck";
import DeleteCheck from "./DeleteCheck";

const Action = ({id, status}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState(null); 
  const [openDialog, setOpenDialog] = useState(false)
  const [openShowDelete, setOpenShowDelete] = useState(false)

  const scroll = 'paper'; 

  const dispatch = useDispatch();

  const handleDeleteStatus = () => {
    dispatch(deleteCustomer({ids: id}))
    handleClose();
    setOpenShowDelete(true);
  }

  const handleEditStatus = () => {
    dispatch(postUpdateStatus({
      id,
      data: {
        status: !status,
      }
    }))
    handleClose();
    setOpenDialog(true)
  }
  // console.log(id, status)

  const handleClick = (event, actionType) => {
    setAnchorEl(event.currentTarget);
    setType(actionType);
  };

  const handleCloseDelete = () => {
    setOpenShowDelete(false)
    dispatch(getAdminCustomer());
  };

  const handleCloseDialog = () => {
    setOpenDialog(false)
    dispatch(getAdminCustomer());
  };

  const handleClose = () => {
    setAnchorEl(null);
    setType(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <DeleteOutlineIcon
        onClick={(e) => handleClick(e, "delete")}
        sx={{
          color: "red",
          fontSize: 22,
          cursor: "pointer",
          "&:hover": { opacity: 0.7 },
        }}
      />

      <BorderColorIcon
        onClick={(e) => handleClick(e, "edit")}
        sx={{
          color: "green",
          fontSize: 22,
          cursor: "pointer",
          "&:hover": { opacity: 0.7 },
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card sx={{ p: 2, maxWidth: 300 }}>
          <CardContent>
            {type === "delete" && (
              <>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "red", mb: 1, display: 'flex' }}
                >
                  <ErrorOutlineIcon sx={{fontSize: 20}}/>
                  Xác nhận xóa
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Bạn có chắc chắn muốn xóa customer này?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                  <Button variant="outlined" size="small" onClick={handleClose}>
                    Hủy
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={handleDeleteStatus}
                  >
                    Xóa
                  </Button>
                </Box>
              </>
            )}

            {type === "edit" && (
              <>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#f59e0b", mb: 1 }}
                >
                  <ErrorOutlineIcon sx={{fontSize: 20}}/>
                  Xác nhận thay đổi
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Bạn có chắc chắn muốn thay đổi status customer này?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                  <Button variant="outlined" size="small" onClick={handleClose}>
                    Hủy
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleEditStatus}
                  >
                    Xác nhận
                  </Button>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      </Popover>

      <Dialog 
        maxWidth
        open={openDialog}
        onClose={handleCloseDialog}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
            sx: {
            position: 'absolute',
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 750
            },
        }}
      >
        <EditCheck close={handleCloseDialog}/>
      </Dialog>

      <Dialog 
        maxWidth
        open={openShowDelete}
        onClose={handleCloseDelete}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
            sx: {
            position: 'absolute',
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 750
            },
        }}
      >
        <DeleteCheck close={handleCloseDelete}/>
      </Dialog>
    </Box>
  );
};

export default Action;
