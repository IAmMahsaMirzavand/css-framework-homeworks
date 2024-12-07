import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import theme from '../../theme';


function BoxComponent() {
  return (
    <ThemeProvider theme={theme}>  
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Primary
        </Box>

        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'secondary.main',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Secondary
        </Box>

        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'success.main', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Success
        </Box>

    
      </div>
    </ThemeProvider>
  );
}

export default BoxComponent;
