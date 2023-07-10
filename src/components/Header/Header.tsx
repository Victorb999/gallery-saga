import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

  const Header = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            GALLERY SAGA
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };

  export {Header}