import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function NoMatch() {
  return (
    <div className='container'>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'primary',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant = 'p' style={{color:'white'}}>
      Page Cannot Be Found Or Check Your Internet Connection
      </Typography>
    </Box>
    </div>
  )
}

export default NoMatch