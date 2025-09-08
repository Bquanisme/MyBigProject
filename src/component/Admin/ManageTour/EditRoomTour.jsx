import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminDetailRoomTour,
  getAdminRoomTour,
  postAdminEditRoomTour,
} from "../../../Redux/ReduxAuth/Slice/adminSlice";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import loading from "../../../assets/loading.gif";

const EditRoomTour = ({ id }) => {
  const [openDialog, setOpenDialog] = useState(false);

  // Tách riêng từng field
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");
  const [description, setDescription] = useState("");
  const [typeRoom, setTypeRoom] = useState("");
  const [logoDelete, setLogoDelete] = useState(false);

  const dispatch = useDispatch();
  const detail = useSelector((state) => state.admin.roomTourDetail);

  const handleClick = async () => {
    setOpenDialog(true);
    await dispatch(getAdminDetailRoomTour(id));
  };

  useEffect(() => {
    if (detail) {
      setName(detail?.name || "");
      setType(detail?.type || "");
      setCost(detail?.cost || "");
      setStatus(detail?.status || "");
      setStartDate(detail?.start_date || "");
      setEndDate(detail?.end_date || "");
      setLogo(null);
      setLogoPreview(detail?.logo || "");
      setDescription(detail?.description || "");
      setTypeRoom(detail?.type_room || "");
      setLogoDelete(false)
    }
  }, [detail]);

  const handleClose = () => setOpenDialog(false);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
      setLogoDelete(true)
    }
  };

  const handleEdit = async () => {
    await dispatch(
      postAdminEditRoomTour({
        id,
        data: {
          name,
          type,
          cost,
          status,
          start_date: startDate,
          end_date: endDate,
          logo,
          description,
          type_room: typeRoom,
          logo_delete: logoDelete
        },
      })
    );
    dispatch(getAdminRoomTour())
    setOpenDialog(false);
  };

  if (!detail) return <img src={loading} alt="loading" />;

  return (
    <Box>
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
        open={openDialog}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <Box p={3}>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight={600} fontSize="18px">
              Update Tour
            </Typography>
            <CloseIcon
              onClick={handleClose}
              sx={{ cursor: "pointer", color: "grey" }}
            />
          </Box>
          <Divider sx={{ my: 2 }} />

          {/* Form */}
          <Box component="form">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
              <Box>
                <Label text="Name Tour" required />
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Box>

              <Box>
                <Label text="Category" required />
                <Input value={type} onChange={(e) => setType(e.target.value)} />
              </Box>

              <Box>
                <Label text="Cost (VND)" required />
                <Input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </Box>

              <Box>
                <Label text="Status" required />
                <Input
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </Box>
            </Box>

            {/* Logo preview */}
            <Box
              textAlign="center"
              my={3}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {logoPreview && (
                <img
                  src={logoPreview}
                  alt="logo preview"
                  style={{
                    width: "350px",
                    height: "200px",
                    display: "flex",
                    objectFit: "cover",
                    borderRadius: "8px",
                    margin: "auto",
                  }}
                />
              )}
              <br />
              <input
                type="file"
                accept="image/*"
                id="avatar-upload"
                style={{ display: "none" }}
                onChange={handleLogoChange}
              />

              <label htmlFor="avatar-upload">
                <Button
                  component="span"
                  variant="outlined"
                  color="error"
                  sx={{ textTransform: "none" }}
                >
                  Đổi Logo
                </Button>
              </label>
            </Box>

            {/* Date */}
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
              <Box>
                <Label text="Date Start" required />
                <Input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Box>
              <Box>
                <Label text="Date End" required />
                <Input
                  type="text"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Box>
            </Box>

            {/* Description */}
            <Box mt={3}>
              <Label text="Description" required />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: "100px",
                  borderRadius: 7,
                  border: "1px solid lightgrey",
                  padding: 10,
                  fontSize: 15,
                }}
              />
            </Box>

            {/* Actions */}
            <DialogActions sx={{ mt: 3 }}>
              <Button onClick={handleClose} variant="outlined" sx={{textTransform: 'none'}}>
                Hủy
              </Button>
              <Button onClick={handleEdit} variant="contained" sx={{textTransform: 'none'}}>
                Lưu
              </Button>
            </DialogActions>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

// Label component
const Label = ({ text, required }) => (
  <Typography fontSize={14} fontWeight={500} mb={1}>
    {required && <span style={{ color: "red" }}>* </span>}
    {text}
  </Typography>
);

// Input component
const Input = (props) => (
  <input
    {...props}
    style={{
      width: "100%",
      height: 40,
      borderRadius: 7,
      border: "1px solid lightgrey",
      padding: "0 10px",
      fontSize: 15,
    }}
  />
);

export default EditRoomTour;
