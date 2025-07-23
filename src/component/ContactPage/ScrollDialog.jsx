import * as React from 'react';
import {
  Button,
  Dialog,
} from '@mui/material';
import ScrollDialogUI from './ScrollDialogUI';


export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const scroll = 'paper'; 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button style={{color: 'white'}} onClick={handleClickOpen}>
        Liên hệ
      </Button>

      <Dialog 
        maxWidth
        open={open}
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
        <ScrollDialogUI/>
      </Dialog>
    </React.Fragment>
  );
}
