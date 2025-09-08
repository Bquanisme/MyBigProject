import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  Divider,
  Fade,
  Menu,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminRoomTour,
  postCreateRoom,
  postCreateTour,
} from "../../../Redux/ReduxAuth/Slice/adminSlice";

const NewRoomTour = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [typeRoom, setTypeRoom] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState('');
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    cost: "",
    typeRoom: "",
    dateStart: "",
    dateEnd: "",
    logo: null,
    banner: '',
    status: "",
    description: "",
  });
  const scroll = "paper";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorElStatus, setAnchorElStatus] = useState(null);
  const openStatus = Boolean(anchorElStatus);
  const [anchorElCategory, setAnchorElCategory] = useState(null);
  const openCategory = Boolean(anchorElCategory);

  const dispatch = useDispatch();
  const roomTour = useSelector((state) => state.admin.roomTourAdmin);

  const roomTypes = roomTour
  ? roomTour
      .map((item) => item.type_room)               
      .filter((type, index, self) => self.indexOf(type) === index)
  : [];

  const roomStatus = roomTour
  ? roomTour
      .map((item) => item.status)               
      .filter((type, index, self) => self.indexOf(type) === index)
  : [];

  const roomCategory = roomTour
  ? roomTour
      .map((item) => ({
        id: item?.categories?.id, 
        name: item?.categories?.name,
      }))
      .filter(
        (cate, index, self) =>
          cate && index === self.findIndex((c) => c.id === cate.id)
      )
  : [];

  const handleChangeBanner = (e) => {
    setBanner(e.target.files[0]);
  }

  const handleClickInput = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value) => {
    setTypeRoom(value);
    handleCloseMenu();
  };

  const handleClickStatus = (event) => {
    setAnchorElStatus(event.currentTarget);
  };
  const handleCloseStatus = () => {
    setAnchorElStatus(null);
  };
  const handleSelectStatus = (value) => {
    setStatus(value);
    handleCloseStatus();
  };

  const handleClickCategory = (event) => {
    setAnchorElCategory(event.currentTarget);
  };
  const handleCloseCategory = () => {
    setAnchorElCategory(null);
  };
  const handleSelectCategory = (id) => {
    setCategory(id);
    handleCloseCategory();
  };

  const handleNew = async () => {
    if(roomTypes[1]==='room'){
        await dispatch(postCreateRoom({
            name,
            description,
            type: category,
            cost,
            start_date: dateStart,
            end_date: dateEnd,
            logo,
            banner,
            status,
            type_room: typeRoom
        }))
        dispatch(getAdminRoomTour())
    }
    else if(roomTypes[0]==='tour'){
        await dispatch(postCreateTour({
            name,
            description,
            type: category,
            cost,
            start_date: dateStart,
            end_date: dateEnd,
            logo,
            banner,
            status,
            type_room: typeRoom
        }))
        dispatch(getAdminRoomTour())
    }
    setOpenDialog(false);
    setFormData('')
  };

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={handleClick}
      >
        New Category
      </Button>

      <Dialog
        maxWidth
        open={openDialog}
        onClose={handleClose}
        scroll={scroll}
        PaperProps={{
          sx: {
            position: "absolute",
            top: 80,
            m: 0,
            borderRadius: 2,
            width: 900,
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
            Thêm mới Tour
          </Typography>

          <Divider variant="middle" sx={{ my: 2 }} />

          <form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Name + Category */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box ml={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ color: "red" }}>*</Typography>
                    <Typography>Name Tour</Typography>
                  </Box>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    required
                  />
                </Box>

                <Box ml={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ color: "red" }}>*</Typography>
                    <Typography>Category</Typography>
                  </Box>
                  <input
                    name="Category"
                    type="text"
                    placeholder="Select a Category"
                    value={category}
                    readOnly
                    onClick={handleClickCategory}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    required
                  />

                  <Menu
                    id="fade-menu"
                    anchorEl={anchorElCategory}
                    open={openCategory}
                    onClose={handleCloseCategory}
                    TransitionComponent={Fade}
                  >
                    {roomCategory.length > 0 ? (
                      roomCategory.map((cate) => (
                        <MenuItem key={cate.id} onClick={() => handleSelectCategory(cate.id)}>
                          {cate.name}
                        </MenuItem>
                      ))
                    ) : (
                        <MenuItem disabled>No Category found</MenuItem>
                    )}
                  </Menu>
                </Box>
              </Box>

              {/* Cost + Type Room */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box ml={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ color: "red" }}>*</Typography>
                    <Typography>Cost</Typography>
                  </Box>
                  <input
                    name="cost"
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    style={inputStyle}
                    required
                  />
                </Box>

                <Box ml={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ color: "red" }}>*</Typography>
                    <Typography>Type Room</Typography>
                  </Box>
                  <input
                    name="typeRoom"
                    type="text"
                    placeholder="Select a Type Room"
                    value={typeRoom}
                    readOnly
                    onClick={handleClickInput}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    required
                  />

                  <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    TransitionComponent={Fade}
                  >
                    {roomTypes.length > 0 ? (
                        roomTypes.map((type, index) => (
                        <MenuItem key={index} onClick={() => handleSelect(type)}>
                            {type}
                        </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>No room type found</MenuItem>
                    )}
                  </Menu>
                </Box>
              </Box>

              {/* Date Start + Date End */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box ml={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ color: "red" }}>*</Typography>
                    <Typography>Date Start</Typography>
                  </Box>
                  <input
                    name="dateStart"
                    type="date"
                    value={dateStart}
                    onChange={(e) => setDateStart(e.target.value)}
                    style={inputStyle}
                    required
                  />
                </Box>

                <Box ml={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ color: "red" }}>*</Typography>
                    <Typography>Date End</Typography>
                  </Box>
                  <input
                    name="dateEnd"
                    type="date"
                    value={dateEnd}
                    onChange={(e) => setDateEnd(e.target.value)}
                    style={inputStyle}
                    required
                  />
                </Box>
              </Box>

              {/* Logo + Banner + Status */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box ml={1}>
                  <Typography>IMG Logo</Typography>
                  <input 
                  name="logo" 
                  type="file" 
                  onChange={(e) => setLogo(e.target.files[0])}
                  style={fileInputStyle} />
                </Box>

                <Box ml={1.5}>
                  <Typography>IMG Banner</Typography>
                  <input
                    name="banner"
                    type="file"
                    multiple
                    onChange={handleChangeBanner}
                    style={fileInputStyle}
                  />

                </Box>

                <Box ml={1.5}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ color: "red" }}>*</Typography>
                        <Typography>Status</Typography>
                    </Box>
                    <input
                        name="status"
                        type="text"
                        placeholder="Select a status"
                        value={status}
                        readOnly
                        onClick={handleClickStatus}
                        style={{ ...inputStyleStatus, cursor: "pointer" }}
                        required
                    />
                    <Menu
                        anchorEl={anchorElStatus}
                        open={openStatus}
                        onClose={handleCloseStatus}
                        TransitionComponent={Fade}
                        PaperProps={{
                            sx: {
                            minWidth: anchorElStatus ? anchorElStatus.clientWidth : undefined,
                            },
                        }}
                    >
                    {roomStatus.length > 0 ? (
                        roomStatus.map((s, index) => (
                        <MenuItem sx={{width: '100%'}} key={index} onClick={() => handleSelectStatus(s)}>
                            {s}
                        </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>No status found</MenuItem>
                    )}
                    </Menu>
                </Box>
              </Box>

              {/* Description */}
              <Box ml={1.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ color: "red" }}>*</Typography>
                  <Typography>Description</Typography>
                </Box>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: "100%",
                    height: 130,
                    margin: 3,
                    marginTop: 15,
                    borderRadius: "7px",
                    borderStyle: "solid",
                    borderColor: "lightgrey",
                    padding: 7,
                    fontSize: "16px",
                  }}
                  required
                />
              </Box>
            </Box>

            {/* Actions */}
            <DialogActions>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "grey",
                  borderColor: "lightgray",
                }}
                onClick={handleClose}
              >
                Hủy
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                onClick={handleNew}
              >
                Tạo mới
              </Button>
            </DialogActions>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
};

const inputStyle = {
  width: 400,
  margin: 3,
  marginTop: 15,
  height: "40px",
  fontSize: "16px",
  borderRadius: "7px",
  borderStyle: "solid",
  borderColor: "lightgrey",
  paddingLeft: 12,
};

const inputStyleStatus = {
  width: "100%",
  margin: 3,
  marginTop: 10,
  height: "40px",
  fontSize: "16px",
  borderRadius: "7px",
  borderStyle: "solid",
  borderColor: "lightgrey",
  paddingLeft: 12,
};

const fileInputStyle = {
  width: "100%",
  margin: 3,
  marginTop: 15,
  height: "40px",
  fontSize: "14px",
  paddingLeft: 1,
  paddingTop: 3,
};

export default NewRoomTour;
