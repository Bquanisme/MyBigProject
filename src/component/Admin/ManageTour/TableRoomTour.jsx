import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Dialog } from '@mui/material';
import EditRoomTour from './EditRoomTour';
import DetailRoomTour from './DetailRoomTour';

export default function TableRoomTour({ paginatedCategory, filteredData, selectedIds, setSelectedIds }) {

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const scroll = 'paper';

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedIds.length > 0 && selectedIds.length < filteredData.length
                  }
                  checked={
                    filteredData.length > 0 && selectedIds.length === filteredData.length
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(filteredData.map(row => row.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                  sx={{
                    color: 'grey',
                    '&.Mui-checked': { color: 'green' }
                  }}
                />
              </TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }}></TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">Name</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">Description</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">Type</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">Cost(VND)</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">Start date</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">End date</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">Category</TableCell>
              <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCategory && paginatedCategory.map((row) => {
              const isSelected = selectedIds.includes(row?.id);
              return (
                <TableRow
                  key={row?.id}
                  sx={{
                    bgcolor: isSelected ? '#d5f4f8ff' : 'inherit',
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleSelect(row?.id)}
                      sx={{
                        color: 'grey',
                        '&.Mui-checked': { color: 'green' }
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    {row?.id}
                  </TableCell>
                  <TableCell>
                    {row?.logo ? (
                      <img
                        src={row.logo}
                        alt="logo"
                        onClick={() => handleOpen(row)}
                        style={{
                          width: 150,
                          height: 100,
                          objectFit: "cover",
                          borderRadius: 4,
                          cursor: "pointer"
                        }}
                      />
                    ) : (
                      "null"
                    )}
                  </TableCell>
                  <TableCell align="left">{row?.name || 'null'}</TableCell>
                  <TableCell align="left">{row?.description || 'null'}</TableCell>
                  <TableCell align="left">{row?.type || 'null'}</TableCell>
                  <TableCell align="left">{row?.cost || 'null'}</TableCell>
                  <TableCell align="left">{row?.start_date || 'null'}</TableCell>
                  <TableCell align="left">{row?.end_date || 'null'}</TableCell>
                  <TableCell align="left">{row?.categories?.name || 'null'}</TableCell>
                  <TableCell align="left">
                    <EditRoomTour id={row?.id} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        maxWidth
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          sx: {
            position: "absolute",
            top: 0,
            m: 0,
            right: 0,
            minHeight: '100%',
            borderRadius: 2,
            width: 900
          }
        }}
      >
        {selectedRow && <DetailRoomTour data={selectedRow} handleClose={handleClose} />}
      </Dialog>
    </>
  );
}
