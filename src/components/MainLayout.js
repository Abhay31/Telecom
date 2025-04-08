import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Offers", path: "/offers" },
  { label: "Enquire Now", path: "/enquiry" },
];

const MainLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navLinks.map(({ label, path }) => (
          <ListItem button component={Link} to={path} key={label}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ backgroundColor: "#0f3cc9" }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Jio
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
              </Drawer>
            </>
          ) : (
            navLinks.map(({ label, path }) => (
              <Button
                key={label}
                component={Link}
                to={path}
                sx={{ color: "white", textTransform: "none", ml: 2 }}
              >
                {label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Box maxWidth="xl" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Box component="footer" sx={{ bgcolor: "#fff", color: "black", py: 3, mt: "auto" }}>
        <Container maxWidth="xl">
          <Typography variant="body1" align="center">
            © 2025 Jio Telecom. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
