// import * as React from 'react';
// import { Box, Button, Container, TextField, Typography} from '@mui/material';
// import Grid from '@mui/material/Grid2';
// import { useState } from 'react';

// export default function RegisterForm() {



//     const [formData, setFormData] = useState({
//         firstName: "",
//         userName: "",
//         age: "",
//         email: "",
//        password: "",
//        bio: "",
//       });

//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//       };
    
     
//       const handleSubmit = () => {
        
//         console.log("Form submitted:", formData);
        
        
//         setFormData({
//           firstName: "",
//           userName: "",
//           age: "",
//           email: "",
//           password: "",
//           bio: "",
//         });
//       };
    
      


//   return (
//     <>
//       <Container fixed>
//          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
//           <Typography fontWeight={{ xs: 'light', sm: 'normal', lg: 'bold' }} variant="h4" gutterBottom>
//             Create Your Account
//           </Typography>
//         </Box>
//         <Box sx={{ flexGrow: 1 }} >
//           <Grid  container  spacing={2} columns={{ xs: 4, lg: 12, md: 12 }}>
//             <Grid size={{xs:12, sm:4} } >
//               <TextField fullWidth name="firstName" label="First Name" variant="outlined"   value={formData.firstName}
//                 onChange={handleInputChange}/>
//             </Grid>
//             <Grid size={{xs:12, sm:4}} >
//               <TextField fullWidth name="userName" label="Username" variant="outlined"    value={formData.userName}
//                 onChange={handleInputChange} />
//             </Grid>
//             <Grid size={{xs:12, sm:4}}>
//               <TextField fullWidth name="age" label="Age" variant="outlined"  value={formData.age}
//                 onChange={handleInputChange} />
//             </Grid>
//             <Grid size={{xs:12, sm:6}}>
//               <TextField fullWidth name="email" label="Email" variant="outlined"   value={formData.email}
//                 onChange={handleInputChange} />
//             </Grid>
//             <Grid size={{xs:12, sm:6}}>
//               <TextField fullWidth name="password" label="Password" variant="outlined"   value={formData.password}
//                 onChange={handleInputChange} />
//             </Grid>
//             <Grid size={{xs:12}}>
//               <TextField fullWidth multiline rows={4} name="bio" label="Bio" variant="outlined"  value={formData.bio}
//                 onChange={handleInputChange} />
//             </Grid>

//             <Grid size={{xs:12}}>
//               <Grid container justifyContent="center">
//                 <Grid size={{xs:12, sm:6}}>
//                   <Button variant="contained" fullWidth onClick={handleSubmit}>
//                     SIGN UP
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Grid>

//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// }







import * as React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    userName: "",
    age: "",
    email: "",
    password: "",
    bio: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required.";
    if (!formData.userName) errors.userName = "Username is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.password) errors.password = "Password is required.";
    if (!formData.age || isNaN(formData.age) || formData.age <= 0) errors.age = "Age must be a valid number.";
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({
        firstName: "",
        userName: "",
        age: "",
        email: "",
        password: "",
        bio: "",
      });
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <Container fixed>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Typography fontWeight={{ xs: 'light', sm: 'normal', lg: 'bold' }} variant="h4" gutterBottom>
          Create Your Account
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 4, lg: 12, md: 12 }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              name="firstName"
              label="First Name"
              variant="outlined"
              value={formData.firstName}
              onChange={handleInputChange}
              error={Boolean(formErrors.firstName)}
              helperText={formErrors.firstName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              name="userName"
              label="Username"
              variant="outlined"
              value={formData.userName}
              onChange={handleInputChange}
              error={Boolean(formErrors.userName)}
              helperText={formErrors.userName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              name="age"
              label="Age"
              variant="outlined"
              value={formData.age}
              onChange={handleInputChange}
              error={Boolean(formErrors.age)}
              helperText={formErrors.age}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              error={Boolean(formErrors.password)}
              helperText={formErrors.password}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="bio"
              label="Bio"
              variant="outlined"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Grid container justifyContent="center">
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth onClick={handleSubmit}>
                  SIGN UP
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}



