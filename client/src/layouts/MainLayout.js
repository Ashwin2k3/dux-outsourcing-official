import React, { useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Grid,
  ListItemIcon,
  TextField,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemButton,
  Collapse,
  Stack,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Business as BusinessIcon,
  Info as InfoIcon,
  Article as ArticleIcon,
  LocalOffer as LocalOfferIcon,
  ContactMail as ContactMailIcon,
  AccountBalance as AccountBalanceIcon,
  Receipt as ReceiptIcon,
  Payments as PaymentsIcon,
  Calculate as CalculateIcon,
  AccountTree as AccountTreeIcon,
  Analytics as AnalyticsIcon,
  AutoFixHigh as AutoFixHighIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Articles', path: '/articles' },
    { text: 'About', path: '/about' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Contact', path: '/contact' },
  ];

  const services = [
    { text: 'Accounting Solutions', path: '/services/accounting' },
    { text: 'Financial Reporting', path: '/services/financial-reporting' },
    { text: 'BAS Returns', path: '/services/bas' },
    { text: 'Payroll Compliances', path: '/services/payroll' },
    { text: 'Tax Returns', path: '/services/tax' },
    { text: 'SMSF Compliance', path: '/services/smsf' },
    { text: 'Document Automation', path: '/services/document-automation' }
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(79, 70, 229, 0.04)',
              },
            }}
          >
            <ListItemText
              primary={item.text}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 700,
                fontSize: '1.5rem',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dux Outsourcing 
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <RouterLink
                    key={item.text}
                    to={item.path}
                    style={{
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      position: 'relative',
                    }}
                  >
                    {item.text}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        transform: 'scaleX(0)',
                        transformOrigin: 'right',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </RouterLink>
                ))}
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 1,
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: 'auto',
          backgroundColor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  component="img"
                  src="/logo.png"
                  alt="MGNG & Co. Logo"
                  sx={{
                    height: 40,
                    mr: 2,
                    filter: 'brightness(0) invert(1)',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                  }}
                >
                   Dux Outsourcing Pvt. Ltd.
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ 
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                Your end-to-end outsourced accounting partner. Specializing in accounting and tax preparation services for businesses, CAs, and CPAs in Australia and India.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton 
                  color="primary" 
                  aria-label="LinkedIn"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(10, 102, 194, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  color="primary" 
                  aria-label="Email"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(234, 67, 53, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton 
                  color="primary" 
                  aria-label="Phone"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(52, 168, 83, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <PhoneIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                color="text.primary" 
                gutterBottom
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'primary.main',
                  }
                }}
              >
                Our Services
              </Typography>
              <List dense sx={{ mt: 2 }}>
                {services.map((item) => (
                  <ListItem 
                    key={item.text} 
                    disablePadding 
                    sx={{ 
                      mb: 1,
                      '&:hover': {
                        '& .MuiTypography-root': {
                          color: 'primary.main',
                          transform: 'translateX(5px)',
                        }
                      }
                    }}
                  >
                    <RouterLink 
                      to={item.path}
                      sx={{ 
                        textDecoration: 'none',
                        width: '100%',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <ListItemText 
                        primary={item.text}
                        sx={{
                          '& .MuiTypography-root': {
                            color: 'text.secondary',
                            transition: 'all 0.3s ease',
                            fontSize: '0.9rem',
                          }
                        }}
                      />
                    </RouterLink>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                color="text.primary" 
                gutterBottom
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'primary.main',
                  }
                }}
              >
                Contact Us
              </Typography>
              <List dense>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon>
                    <LocationOnIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="India Office"
                    secondary={
                      <>
                        E-48, Basement, Prashant Vihar
                        <br />
                        Delhi 110 085, India
                      </>
                    }
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon>
                    <LocationOnIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Australia Office"
                    secondary={
                      <>
                        LSM & Co, 186 A Prospect Road, Prospect, Adelaide, SA 5082.
                        <br />
                        Australia
                      </>
                    }
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon>
                    <EmailIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="duxoutsourcing@gmail.com" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <PhoneIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="+91 92122 50127" />
                </ListItem>
              </List>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                color="text.primary" 
                gutterBottom
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'primary.main',
                  }
                }}
              >
                Get Updates
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Subscribe to our newsletter for the latest updates in accounting and tax services.
              </Typography>
              <Box component="form" sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  size="small"
                  placeholder="Your email"
                  variant="outlined"
                  sx={{ flexGrow: 1 }}
                />
                <Button variant="contained" color="primary">
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Dux Outsourcing Pvt. Ltd. All rights reserved.
            
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <RouterLink to="/privacy" color="inherit" underline="none" variant="body2">
                Privacy Policy
              </RouterLink>
              <RouterLink to="/terms" color="inherit" underline="none" variant="body2">
              
                Terms of Service
              </RouterLink>
              <RouterLink to="/sitemap" color="inherit" underline="none" variant="body2">
                Sitemap
              </RouterLink>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 