import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CallIcon from '@mui/icons-material/Call';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import SmsIcon from '@mui/icons-material/Sms';
import Tele from "../assets/tele.jpg";

const HomePage = () => {
  const services = [
    {
      title: "5G Network",
      description: "Blazing fast 5G speeds for seamless connectivity",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80",
    },
    {
      title: "Fiber Broadband",
      description: "Ultra-fast broadband for your home and office",
      src: "https://img.freepik.com/free-photo/high-speed-optical-cable-fast-data-broadband-transfer-fiber-connection-abstract-tech-background_272375-5414.jpg",
    },
    {
      title: "OTT Bundles",
      description: "Enjoy premium OTT subscriptions with our plans",
      src: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-04/21/full/20210421193918.jpg",
    },
    {
      title: "Landline Services",
      description: "Reliable landline with crystal-clear voice quality",
      src: "https://www.businessinsider.in/photo/85736376/landline.jpg",
    },
  ];
  return (
    <Box>
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Tele})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        py: 15,
        textAlign: 'center',
        mb: 4
      }}>
        <>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Jio
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

      <Container
        maxWidth="lg"
        sx={{
          mb: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ mb: 5, fontWeight: 5 }} align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={1} justifyContent="center" alignItems="stretch">
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} md={4} key={index} sx={{ display: "flex" }}>
              <Card sx={{
                display: "flex", width: '90%', flexDirection: "column", flex: 1, borderRadius: 5, mb: 5, transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }
              }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, width: '100%', objectFit: "cover", borderRadius: 5 }}
                  image={service.src}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1, width: "90%" }}>
                  <Typography gutterBottom component="p" sx={{ fontWeight: "bold", opacity: 0.9 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
        <Grid item align="center">
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2 }}
            gutterBottom
          >
            Good news! Getting started with a new Jio number just got faster
          </Typography>
          <Typography component="p" sx={{ opacity: 0.9 }} gutterBottom>
            Now, don't just order your new Jio SIM and wait. Complete self-KYC from the
            comfort of your home online and get your SIM delivered for free.
          </Typography>
        </Grid>
      </Container>

      <Container
        sx={{
          overflow: "hidden",
          maxWidth: "lg",
          my: 4,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mx: "auto",
            mb: 4,
            maxWidth: 900,
            borderRadius: 5,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            width="100%"
            style={{ display: "block" }}
            poster="https://myjiostatic.cdn.jio.com/cms/assets/home/ekyc-video-animation-thumbnail.jpg"
          >
            <source
              src="https://myjiostatic.cdn.jio.com/cms/assets/home/ekyc-video-animation.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>

        <Grid item align="center" sx={{ mb: 5 }}>
          <Button
            variant="contained"
            sx={{
              px: 3,
              py: 1,
              mb: 4,
              borderRadius: 10,
              backgroundColor: "#0046ff",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0033cc",
              },
            }}
          >
            Get Jio SIM
          </Button>
        </Grid>

        <Grid
          container
          sx={{
            backgroundImage: `url('https://myjiostatic.cdn.jio.com/jio/webp/homepage/17-09-2024/L_1184x520-17.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: 400, md: 512 },
            alignItems: "center",
            px: { xs: 2, sm: 4, md: 8 },
            color: "white",
            borderRadius: 5,
          }}
        >
          <Grid item >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Careers at Jio
            </Typography>
            <Typography variant="" component="p" sx={{ opacity: 0.9 }} gutterBottom>
              Join our team! Explore job openings at Reliance Jio across different roles.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                px: 3,
                py: 1,
                borderRadius: 10,
                backgroundColor: "#0046ff",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0033cc",
                },
              }}
            >
              View job openings
            </Button>
          </Grid>
        </Grid>
        <Grid item align="center" sx={{ mt: 5, mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: "bolder" }} gutterBottom>
            Know what's up with Jio
          </Typography>
          <Typography component="p" sx={{ opacity: 0.9 }} gutterBottom>
            Connecting everyone, with everything, everywhere, Jio is making waves in India and around the world.
          </Typography>
          <Typography component="p" sx={{
            opacity: 0.9, mt: 4, color: "#0a2885", fontWeight: "bold", "&:hover": {
              color: "#0f3cc9",
              cursor: "pointer"
            }
          }} gutterBottom>
            Explore all stories
          </Typography>
        </Grid>

        <Grid container spacing={1} justifyContent="center" alignItems="stretch">
          {[
            {
              title: "Technology",
              description: "Empowering the lives of Ballav family digitally!",
              src: "https://myjiostatic.cdn.jio.com/cms/assets/jiostories/jiokrishi/t1humbnailmobile.webp",
            },
            {
              title: "Digitalising India",
              description: "Preserving Paithani art digitally",
              src: "https://myjiostatic.cdn.jio.com/cms/assets/jiostories/jiokrishi/thumbnail2image.webp",
            },
            {
              title: "Digitalising India",
              description: "Jio 5G SIM activation is now super-easy!",
              src: "https://myjiostatic.cdn.jio.com/cms/assets/jiostories/iactivate/nov-story-thumb.webp",
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={4} md={4} key={index} sx={{ display: "flex" }}>
              <Card sx={{
                display: "flex", width: '90%', flexDirection: "column", flex: 1, borderRadius: 5, mb: 5, transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }
              }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, width: '100%', objectFit: "cover", borderRadius: 5 }}
                  image={service.src}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1, width: "90%" }}>
                  <Typography gutterBottom component="p" sx={{ fontWeight: "bold", opacity: 0.9 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#0f3cc9', color: "white", py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }} gutterBottom>
            Need guidance?
          </Typography>
          <Typography variant="h6" gutterBottom>
            We would like to help you.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: 5,
              flexWrap: "wrap",
              justifyContent: "center",
              rowGap: 2,
            }}
          >
            {[
              { text: "Support", icon: <LiveHelpIcon />, position: "start" },
              { text: "Chat with us", icon: <SmsIcon />, position: "start" },
              { text: "Call us", icon: <CallIcon />, position: "start" },
              { text: "Find a store", icon: <ShoppingBagIcon />, position: "start" },
            ].map((btn, index) => (
              <Button
                key={index}
                variant="outlined"
                startIcon={btn.position === "start" ? btn.icon : null}
                endIcon={btn.position === "end" ? btn.icon : null}
                sx={{
                  px: 2,
                  py: 1,
                  color: "white",
                  borderColor: "white",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: 5,
                  minWidth: { xs: 6, sm: "auto" },
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >
                {btn.text}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

    </Box>
  );
};

export default HomePage;