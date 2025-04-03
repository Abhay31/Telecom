import { Box, Typography, TextField, Button, Container, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';

const EnquiryPage = () => {
  const [service, setService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { service, ...formData });
    alert('Thank you for your enquiry! Our team will contact you shortly.');
    setService('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Service Enquiry Form
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
          Fill out this form to initiate a service request. Our executive will contact you shortly.
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item size={12}>
              <FormControl fullWidth required>
                <InputLabel>Service Interested In</InputLabel>
                <Select
                  value={service}
                  label="Service Interested In"
                  onChange={(e) => setService(e.target.value)}
                >
                  <MenuItem value="mobile">Mobile Plans</MenuItem>
                  <MenuItem value="broadband">Broadband</MenuItem>
                  <MenuItem value="corporate">Corporate Solutions</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid size={12}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item size={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item size={12}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item size={12}>
              <TextField
                fullWidth
                label="Address (for broadband installation)"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item size={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item size={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large"
                  disabled={!service}
                >
                  Submit Enquiry
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
      
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1">
          For immediate assistance, call us at <strong>1800 123 4567</strong>
        </Typography>
      </Box>
    </Container>
  );
};

export default EnquiryPage;