import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Container, Tabs, Tab } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OffersPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const mobilePlans = [
    { name: 'Basic', price: '₹199', data: '1GB/day', validity: '28 days', calls: 'Unlimited' },
    { name: 'Popular', price: '₹299', data: '1.5GB/day', validity: '28 days', calls: 'Unlimited' },
    { name: 'Premium', price: '₹499', data: '2GB/day', validity: '56 days', calls: 'Unlimited' },
    { name: 'Super Saver', price: '₹599', data: '2.5GB/day', validity: '84 days', calls: 'Unlimited' },
    { name: 'Unlimited Max', price: '₹999', data: '3GB/day', validity: '90 days', calls: 'Unlimited' },
    { name: 'Annual Power', price: '₹2999', data: '2GB/day', validity: '365 days', calls: 'Unlimited' }
  ];

  const broadbandPlans = [
    { name: 'Home Basic', price: '₹499', speed: '50 Mbps', data: 'Unlimited', devices: 'Up to 5' },
    { name: 'Home Plus', price: '₹799', speed: '100 Mbps', data: 'Unlimited', devices: 'Up to 10' },
    { name: 'Home Premium', price: '₹999', speed: '200 Mbps', data: 'Unlimited', devices: 'Up to 15' },
    { name: 'Office Starter', price: '₹1499', speed: '300 Mbps', data: 'Unlimited', devices: 'Up to 25' },
    { name: 'Office Pro', price: '₹2499', speed: '500 Mbps', data: 'Unlimited', devices: 'Up to 50' },
    { name: 'Enterprise Max', price: '₹4999', speed: '1 Gbps', data: 'Unlimited', devices: 'Unlimited' }
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 3, fontWeight: 'bold' }}>
        OUR OFFERS
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{ mb: 4 }}
        variant="fullWidth"
      >
        <Tab label="Mobile Plans" />
        <Tab label="Broadband Plans" />
      </Tabs>

      {tabValue === 0 && (
        <Box>
          <Typography variant="h5" align="center" gutterBottom sx={{ mb: 3 }}>
            Mobile Data Plans
          </Typography>
          <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
            {mobilePlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "250px",
                    minWidth: "350px",
                    borderRadius: 5,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)"
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                      {plan.name}
                    </Typography>
                    <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', my: 2 }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Data:</strong> {plan.data}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Validity:</strong> {plan.validity}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Calls:</strong> {plan.calls}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      variant="contained"
                      size="medium"
                      component={Link}
                      to="/enquiry"
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {tabValue === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom align='center' sx={{ mb: 3, }}>
            Broadband Plans
          </Typography>
          <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
            {broadbandPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "250px",
                    minWidth: "350px",
                    borderRadius: 5,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)"
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                      {plan.name}
                    </Typography>
                    <Typography variant="h4" component="p" sx={{ fontWeight: "bold", my: 2 }}>
                      {plan.price}/month
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Speed:</strong> {plan.speed}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Data:</strong> {plan.data}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Devices:</strong> {plan.devices}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                    <Button variant="contained" size="medium" component={Link} to="/enquiry">
                      Subscribe Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Box sx={{ textAlign: 'center', mt: 6, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Need help choosing a plan?
        </Typography>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          to="/enquiry"
        >
          Contact Our Sales Team
        </Button>
      </Box>
    </Container>
  );
};

export default OffersPage;