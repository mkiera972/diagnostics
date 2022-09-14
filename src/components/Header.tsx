import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' color='inherit' noWrap>
          Diagnostic de votre bien immobilier
        </Typography>
        <IconButton color='inherit' aria-label='Github' sx={{ ml: 'auto' }} size='large'/>
      </Toolbar>
    </AppBar>
  )
}
