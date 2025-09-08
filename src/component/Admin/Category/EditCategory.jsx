import React, { useEffect, useState } from "react";
import {
  Box,
  Popover,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogActions,
  Divider,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch, useSelector } from "react-redux";
import { getAdminCategory, getDetailAdminCategory, postAdminEditCategory } from "../../../Redux/ReduxAuth/Slice/adminSlice";

const EditCategory = ({id}) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [description, setDescription] = useState('')
  const scroll = 'paper'; 

  const dispatch = useDispatch();
  const detailCategory = useSelector(state => state.admin.detailCategoryAdmin)

  const handleEdit = () => {
    dispatch(postAdminEditCategory({
        id,
        data: { name, number, description }
    }))
    dispatch(getAdminCategory())
    setOpenDialog(false)
  }

  const handleClick = () => {
    setOpenDialog(true)
    dispatch(getDetailAdminCategory(id))
  };

  const handleClose = () => {
    setOpenDialog(false)
  };

  useEffect(() => {
    setName(detailCategory?.name)
    setNumber(detailCategory?.number)
    setDescription(detailCategory?.description)
  }, [detailCategory])

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <BorderColorIcon
        onClick={(e) => handleClick(e, "edit")}
        sx={{
          color: "green",
          fontSize: 22,
          cursor: "pointer",
          "&:hover": { opacity: 0.7 },
        }}
      />
      <Dialog 
        maxWidth
        open={openDialog}
        onClose={handleClose}
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
        <Box margin='20px'>
          <Box>
            <Typography 
                fontWeight="600" 
                color="black" 
                mb={0.5} 
                textAlign='left' 
                fontSize='18px' 
                margin='10px'
                marginLeft='12px'
            >
            Update Category
            </Typography>
          </Box> <br />
          <Divider variant="middle"/><br />
          <form>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box ml={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography>
                    <Typography sx={{ color: 'black' }}>Name Category</Typography>
                  </Box>
                  <Box>
                    <input
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: 330,
                        margin: 3,
                        marginTop: 15,
                        height: '40px',
                        fontSize: '16px',
                        borderRadius: '7px',
                        borderStyle: 'solid',
                        borderColor: 'lightgrey',
                        paddingLeft: 12
                      }}
                      required
                    />
                  </Box>
                </Box>
                <Box ml={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography>
                    <Typography sx={{ color: 'black' }}>Number</Typography>
                  </Box>
                  <Box>
                    <input
                      name="number"
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      style={{
                        width: 330,
                        margin: 3,
                        marginTop: 15,
                        height: '40px',
                        borderRadius: '7px',
                        borderStyle: 'solid',
                        borderColor: 'lightgrey',
                        paddingLeft: 12,
                        fontSize: '16px',
                      }}
                      required
                    />
                  </Box>
                </Box>
              </Box>
              <Box ml={1.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography>
                  <Typography sx={{ color: 'black' }}>Description</Typography>
                </Box>
                <Box>
                  <textarea
                    name="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      width: '100%',
                      height: 130,
                      margin: 3,
                      marginTop: 15,
                      borderRadius: '7px',
                      borderStyle: 'solid',
                      borderColor: 'lightgrey',
                      padding: 7,
                      fontSize: '16px',
                    }}
                    required
                  />
                </Box>
              </Box>
            </Box>
            <DialogActions>
            <Button 
                  variant='outlined' 
                  sx={{textTransform: 'none', color: "grey", borderColor: 'lightgray'}}
                  onClick={handleClose}
              >
                  Hủy
              </Button>
              <Button 
                  variant='contained' 
                  sx={{textTransform: 'none'}}
                  onClick={handleEdit}
              >
                  Thêm mới
              </Button>   
          </DialogActions>
          </form>
      </Box>
      </Dialog>
    </Box>
  );
};

export default EditCategory;
