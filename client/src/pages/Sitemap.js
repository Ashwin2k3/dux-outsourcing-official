import React from 'react';
import {
  Container,
  Typography,
  Box,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';

const Sitemap = () => {
  const theme = useTheme();

  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'Professional Services', path: '/services' },
    { name: 'About Our Organisation', path: '/about' },
    { name: 'Service Packages', path: '/pricing' },
    { name: 'Professional Consultation', path: '/contact' },
  ];

  const servicePages = [
    { name: 'Accounting Solutions', path: '/services#accounting' },
    { name: 'Business Activity Statements', path: '/services#bas' },
    { name: 'Payroll Compliance', path: '/services#payroll' },
    { name: 'Taxation Services', path: '/services#tax' },
    { name: 'SMSF Compliance', path: '/services#smsf' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

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
              Sitemap
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
              }}
            >
              Navigate our website easily
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Primary Navigation
              </Typography>
              <List>
                {mainPages.map((page) => (
                  <ListItem key={page.path}>
                    <Link
                      href={page.path}
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                        '&:hover': {
                          color: 'primary.dark',
                        },
                      }}
                    >
                      <ListItemText primary={page.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Professional Services
              </Typography>
              <List>
                {servicePages.map((page) => (
                  <ListItem key={page.path}>
                    <Link
                      href={page.path}
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                        '&:hover': {
                          color: 'primary.dark',
                        },
                      }}
                    >
                      <ListItemText primary={page.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Legal Documentation
              </Typography>
              <List>
                {legalPages.map((page) => (
                  <ListItem key={page.path}>
                    <Link
                      href={page.path}
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                        '&:hover': {
                          color: 'primary.dark',
                        },
                      }}
                    >
                      <ListItemText primary={page.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Professional Contact Information
              </Typography>
              <Typography paragraph>
                Professional Enquiries: info@duxoutsourcing.com
              </Typography>
              <Typography paragraph>
                Business Hours: Monday to Friday, 9:00 AM to 5:00 PM AEST
              </Typography>
              <Typography paragraph>
                Registered Office: Level 1, 123 Business Street, Melbourne VIC 3000, Australia
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Sitemap; 