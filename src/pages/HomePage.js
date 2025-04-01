import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box>
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.pikbest.com/backgrounds/20190309/blue-technology-world-telecommunication-day-banner-background_1872431.jpg!sw800')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 15,
        textAlign: 'center',
        mb: 4
      }}>
        <>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to ConnectPlus
          </Typography>
          <Typography variant="h5" gutterBottom>
            Experience the next generation of telecom services
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/offers"
            sx={{ mt: 3 }}
          >
            Explore Plans
          </Button>
        </>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: '5G Network', description: 'Blazing fast 5G speeds for seamless connectivity', src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" },
            { title: 'Fiber Broadband', description: 'Ultra-fast broadband for your home and office', src: "https://img.freepik.com/free-photo/high-speed-optical-cable-fast-data-broadband-transfer-fiber-connection-abstract-tech-background_272375-5414.jpg" },
            { title: 'OTT Bundles', description: 'Enjoy premium OTT subscriptions with our plans', src: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-04/21/full/20210421193918.jpg" },
          ].map((service, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.src}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {service.title}
                  </Typography>
                  <Typography>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.light', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to join the ConnectPlus family?
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/enquiry"
            sx={{ mt: 2 }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;