import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#353535' }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            color: '#ff6400',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'capitalize',
          }}
        >
          GALLERY SAGA
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
