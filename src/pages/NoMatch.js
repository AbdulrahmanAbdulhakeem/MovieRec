import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {motion} from 'framer-motion'

function NoMatch() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:1}}
    >
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
    </motion.div>
  )
}

export default NoMatch