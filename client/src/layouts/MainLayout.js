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
          py: { xs: 6, md: 8 },
          px: 2,
          mt: 'auto',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
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
            {/* Company Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  component="img"
                  src="/logo192-removebg.png"
                  // alt="Dux Outsourcing Logo"
                  sx={{
                    height: 150,
                    mr: 2,
                    filter: 'brightness(0) invert(1)',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
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
                sx={{ 
                  mb: 3,
                  lineHeight: 1.6,
                  color: '#e0e7ff',
                  opacity: 0.9,
                }}
              >
                Your end-to-end outsourced accounting partner. Specializing in accounting and tax preparation services for businesses, CAs, and CPAs in Australia and India.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton 
                  sx={{
                    color: '#e0e7ff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  sx={{
                    color: '#e0e7ff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton 
                  sx={{
                    color: '#e0e7ff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
                sx={{
                  mb: 3,
                  color: 'white',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #fff, transparent)',
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
                      mb: 1.5,
                      '&:hover': {
                        '& .MuiTypography-root': {
                          color: 'white',
                          transform: 'translateX(5px)',
                        }
                      }
                    }}
                  >
                    <RouterLink 
                      to={item.path}
                      style={{ 
                        textDecoration: 'none',
                        width: '100%',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <ListItemText 
                        primary={item.text}
                        sx={{
                          '& .MuiTypography-root': {
                            color: '#e0e7ff',
                            transition: 'all 0.3s ease',
                            fontSize: '0.9rem',
                            opacity: 0.9,
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
                sx={{
                  mb: 3,
                  color: 'white',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #fff, transparent)',
                  }
                }}
              >
                Contact Us
              </Typography>
              <List dense>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: '#e0e7ff' }}>
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
                    sx={{
                      '& .MuiTypography-root': {
                        color: '#e0e7ff',
                        opacity: 0.9,
                      }
                    }}
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: '#e0e7ff' }}>
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
                    sx={{
                      '& .MuiTypography-root': {
                        color: '#e0e7ff',
                        opacity: 0.9,
                      }
                    }}
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: '#e0e7ff' }}>
                    <EmailIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="duxoutsourcing@gmail.com"
                    sx={{
                      '& .MuiTypography-root': {
                        color: '#e0e7ff',
                        opacity: 0.9,
                      }
                    }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 40, color: '#e0e7ff' }}>
                    <PhoneIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="+91 92122 50127"
                    sx={{
                      '& .MuiTypography-root': {
                        color: '#e0e7ff',
                        opacity: 0.9,
                      }
                    }}
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                sx={{
                  mb: 3,
                  color: 'white',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #fff, transparent)',
                  }
                }}
              >
                Get Updates
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 3,
                  color: '#e0e7ff',
                  opacity: 0.9,
                }}
              >
                Subscribe to our newsletter for the latest updates in accounting and tax services.
              </Typography>
              <Box 
                component="form" 
                sx={{ 
                  display: 'flex', 
                  gap: 1,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                    },
                  },
                }}
              >
                <TextField
                  size="small"
                  placeholder="Your email"
                  variant="outlined"
                  sx={{ flexGrow: 1 }}
                />
                <Button 
                  variant="contained" 
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: '1px solid',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#e0e7ff',
                opacity: 0.8,
              }}
            >
              © {new Date().getFullYear()} Dux Outsourcing Pvt. Ltd. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <RouterLink 
                to="/privacy" 
                style={{ 
                  textDecoration: 'none',
                  color: '#e0e7ff',
                  opacity: 0.8,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                Privacy Policy
              </RouterLink>
              <RouterLink 
                to="/terms" 
                style={{ 
                  textDecoration: 'none',
                  color: '#e0e7ff',
                  opacity: 0.8,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                Terms of Service
              </RouterLink>
              <RouterLink 
                to="/sitemap" 
                style={{ 
                  textDecoration: 'none',
                  color: '#e0e7ff',
                  opacity: 0.8,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
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