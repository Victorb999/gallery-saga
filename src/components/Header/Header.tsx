import React from 'react'
import { AppBar, Link, Toolbar, Typography } from '@mui/material'
import Logo from '../../assets/logo.svg'

/**
 * Renderiza o Header
 *
 * @return {JSX.Element} O componente header renderizado
 */
const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#353535' }}>
      <Toolbar>
        <Link
          href="/"
          className="logo"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <img src={Logo} alt="logo" />
          <Typography
            variant="h5"
            sx={{
              color: '#ff6400',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              textTransform: 'capitalize',
            }}
          >
            GALLERY SAGA
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
