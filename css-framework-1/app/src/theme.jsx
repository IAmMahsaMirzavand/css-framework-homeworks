import React from 'react'
import {colors, createTheme } from "@mui/material";


const theme = createTheme({

palette: {

  primary: {
    // main: '#1976d2',  
    main: colors.blue[700],
  },
  secondary: {
    // main: '#dc004e',
    main: colors.pink[500],  
  },
  success: {
    // main: '#388e3c',  
    main: colors.green[700],
  },

}

})
export default theme;
 
