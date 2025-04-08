import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  useTheme,
  Alert,
  CircularProgress,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';

const Contact = () => {
  const theme = useTheme();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    plan: 'Full Time',
    enquiryType: 'General',
  });
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  useEffect(() => {
    // Get plan from URL parameters
    const searchParams = new URLSearchParams(location.search);
    const planFromUrl = searchParams.get('plan');
    if (planFromUrl) {
      setFormData(prev => ({
        ...prev,
        plan: decodeURIComponent(planFromUrl)
      }));
    }
  }, [location]);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fill in all required fields correctly.'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // Format the message with WhatsApp formatting
      const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Company:* ${formData.company || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Plan:* ${formData.plan}\n*Enquiry Type:* ${formData.enquiryType}\n\n*Message:*\n${formData.message}`;

      // Get WhatsApp number from environment variable or use default
      const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER || '919212250127';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in a new tab
      const newWindow = window.open(whatsappUrl, '_blank');
      
      if (newWindow) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Opening WhatsApp chat...'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          plan: 'Full Time',
          enquiryType: 'General',
        });
      } else {
        throw new Error('Could not open WhatsApp. Please check your popup settings.');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error.message || 'Failed to open WhatsApp chat. Please try again.'
      });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
              }}
            >
              Let's discuss how we can help your business grow
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: 'background.paper',
              }}
            >
              {status.message && (
                <Alert
                  severity={status.success ? 'success' : 'error'}
                  sx={{ mb: 3 }}
                >
                  {status.message}
                </Alert>
              )}

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                    <MenuItem value="Project Based">Project Based</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Enquiry Type"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    <MenuItem value="General">General</MenuItem>
                    <MenuItem value="Sales">Sales</MenuItem>
                    <MenuItem value="Support">Support</MenuItem>
                    <MenuItem value="Partnership">Partnership</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!formErrors.message}
                    helperText={formErrors.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={status.loading}
                    sx={{ py: 1.5 }}
                  >
                    {status.loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  India Office
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      E-48, Basement, Prashant Vihar
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Delhi 110 085, India
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    +91 92122 50127
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    manish_49@yahoo.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Australia Office
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    LSM & Co, 186 A Prospect Road, Prospect, Adelaide, SA 5082.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Australia
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    Coming Soon
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    laxman.mehra@lsmco.com.au
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Business Hours */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Box 
            sx={{ 
              p: 4,
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Business Hours
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  India Office
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monday - Friday: 9:00 AM - 6:00 PM IST
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Australia Office
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monday - Friday: 9:00 AM - 5:00 PM ACST
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 