import React from 'react'
import Logo from '../assets/images/Logo-1.png'
import { Box, Stack, Typography } from '@mui/material'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='20px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="" width='200px' height='40px' />
        <Typography variant='h5' pb='10px' className='footer-text' >
        💪 Train Hard. Stay Healthy. Live Better.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
