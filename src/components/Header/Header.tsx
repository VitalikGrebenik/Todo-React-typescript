import React from 'react'
import {Typography, Box} from '@mui/material';

export const Header = () => {
  return (
	<Box>
		<Typography sx={{ fontSize: 50 , color: 'white', textTransform: 'uppercase' }} variant="h1" component="h1" gutterBottom>
			Todo List
		</Typography>
	</Box>

  )
}
