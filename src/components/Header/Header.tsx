import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#353535' }}>
      <Toolbar>
        <Typography variant="h5">
          <a href="/" className="logo">
            GALLERY SAGA
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
