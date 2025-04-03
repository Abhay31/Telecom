import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import React from "react"

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            color="inherit"
            component={Link}
            to="/"
            variant="h5"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            ConnectPlus
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/offers">Offers</Button>
          <Button color="inherit" component={Link} to="/enquiry">Enquire Now</Button>
        </Toolbar>
      </AppBar>

      <Box maxWidth="xl" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
        <Container maxWidth="xl">
          <Typography variant="body1" align="center">
            © 2025 ConnectPlus Telecom. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;