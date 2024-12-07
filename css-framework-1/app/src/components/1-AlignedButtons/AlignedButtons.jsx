import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import PersonIcon from "@mui/icons-material/Person";

export default function ButtonsComponent() {

const [isDisabled,setIsDisabled] = useState(false)
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
      <Button variant="text" color="error" disabled={isDisabled} onClick={() => setIsDisabled(true)} sx={{paddingY:"0.5rem ", paddingX: "2rem"}}>Text</Button>
      <Button variant="contained"  color="success"  startIcon={<PersonIcon/>} sx={{paddingY:"0.5rem ", paddingX: "2rem"}}>Contained</Button>
      <Button variant="outlined" color="secondary" href="https://APSignals.com" target="_blank" sx={{paddingY:"0.5rem ", paddingX: "2rem"}}>Outlined</Button>
     {/* <Button variant="outlined"  color="secondary" href="#outlined-buttons" onClick={() => window.open("https://APSignals.com", "_blank")} sx={{paddingY:"0.5rem ", paddingX: "2rem"}}>Outlined</Button> */}
      </Stack> 





      {/* <Stack direction="row" spacing={2}>
  {["text", "contained", "outlined"].map((variant, index) => (
    <Button
      key={index}
      variant={variant}
      sx={{ paddingY: "0.5rem", paddingX: "2rem" }}
      {...(variant === "text" && { disabled: isDisabled, onClick: () => setIsDisabled(true) })}
      {...(variant === "contained" && { startIcon: <PersonIcon /> })}
      {...(variant === "outlined" && { href: "https://APSignals.com", target: "_blank" })}
    >
      {variant.charAt(0).toUpperCase() + variant.slice(1)}
    </Button>
  ))}
</Stack> */}




    </div>
  );
}





