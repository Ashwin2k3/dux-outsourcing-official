import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';

const Contact = () => {
  return (
    <Box>
      {/* Hero and Form Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.2)' },
              '100%': { transform: 'scale(1)' },
            },
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
            animation: 'shine 8s linear infinite',
            '@keyframes shine': {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(100%)' },
            },
          },
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  color: '#e0e7ff',
                }}
              >
                Let's discuss how we can help your business grow
              </Typography>
            </motion.div>
          </Box>

          {/* Contact Options (No Form) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                maxWidth: 1000,
                mx: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 3.5, borderRadius: 2, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0,0,0,0.12)' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(99,102,241,0.12)', display: 'grid', placeItems: 'center' }}>
                        <EmailIcon sx={{ color: 'primary.main' }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }} color="primary">Email Us</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#0f172a', opacity: 0.85, mb: 2 }}>
                      Prefer email? We'll reply within one business day.
                    </Typography>
                    <Button component="a" href="mailto:manish.gupta@duxoutsourcing.com" variant="contained" fullWidth startIcon={<EmailIcon />} sx={{ fontSize: '0.8rem' }}>
                      Email manish.gupta@duxoutsourcing.com
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 3.5, borderRadius: 2, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0,0,0,0.12)' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(59,130,246,0.12)', display: 'grid', placeItems: 'center' }}>
                        <PhoneIcon sx={{ color: 'primary.main' }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }} color="primary">Call Us</Typography>
                    </Box>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Button component="a" href="tel:+919212250127" fullWidth variant="outlined" startIcon={<PhoneIcon />}>Call India: +91 92122 50127</Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button component="a" href="tel:+61883435000" fullWidth variant="outlined" startIcon={<PhoneIcon />}>Call Australia: (08) 8343-5000</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 3.5, borderRadius: 2, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0,0,0,0.12)' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', display: 'grid', placeItems: 'center' }}>
                        <PublicIcon sx={{ color: 'primary.main' }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }} color="primary">Connect</Typography>
                    </Box>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Button component="a" href="https://www.linkedin.com/company/dux-outsourcing-private-limited" target="_blank" rel="noopener noreferrer" fullWidth variant="outlined">LinkedIn</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.2)' },
              '100%': { transform: 'scale(1)' },
            },
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  p: 4,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PublicIcon sx={{ mr: 2, color: '#FF9933' }} />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    India Office
                  </Typography>
                </Box>
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
                  <Typography variant="body1" component="a" href="tel:+919212250127" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    +91 92122 50127
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1" component="a" href="mailto:manish.gupta@duxoutsourcing.com" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    manish.gupta@duxoutsourcing.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  p: 4,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PublicIcon sx={{ mr: 2, color: '#00008B' }} />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Australia Office
                  </Typography>
                </Box>
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
                  <Typography variant="body1" component="a" href="tel:+6183435000" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    (08) 8343-5000
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1" component="a" href="mailto:lsmadmin@lsmco.com.au" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    lsmadmin@lsmco.com.au
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Business Hours */}
      <Box 
        sx={{ 
          py: { xs: 4, md: 6 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.2)' },
              '100%': { transform: 'scale(1)' },
            },
          },
        }}
      >
        <Container maxWidth="md">
          <Box 
            sx={{ 
              p: 4,
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                transform: 'translateY(-4px)',
                transition: 'all 0.3s ease',
              },
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