import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const services = [
  {
    title: 'Accounting Solutions',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    description: 'End-to-end accounting services for businesses and chartered accounting firms, including transaction processing and financial management solutions.',
    path: '/services#accounting',
    color: '#2563eb'
  },
  {
    title: 'Financial Reporting',
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    description: 'Comprehensive financial reporting and analysis services to support informed business decisions and strategic financial objectives.',
    path: '/services#financial-reporting',
    color: '#7c3aed'
  },
  {
    title: 'BAS Returns',
    icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    description: 'Expert management of Business Activity Statements, Goods and Services Tax (GST), Pay As You Go (PAYG), and other taxation compliance requirements.',
    path: '/services#bas',
    color: '#059669'
  },
  {
    title: 'Payroll Compliance',
    icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
    description: 'Comprehensive payroll management solutions with Single Touch Payroll (STP) compliance and reporting capabilities.',
    path: '/services#payroll',
    color: '#dc2626'
  },
  {
    title: 'Tax Returns',
    icon: <CalculateIcon sx={{ fontSize: 40 }} />,
    description: 'Professional tax preparation and lodgement services for businesses and individuals, ensuring compliance with Australian Taxation Office requirements.',
    path: '/services#tax',
    color: '#9333ea'
  },
  {
    title: 'SMSF Compliance',
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
    description: 'Specialised Self-Managed Super Fund services with comprehensive compliance management and regulatory reporting.',
    path: '/services#smsf',
    color: '#2563eb'
  },
  {
    title: 'Document Automation',
    icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
    description: 'Advanced document processing and automation solutions to enhance operational efficiency and streamline business processes.',
    path: '/services#document-automation',
    color: '#7c3aed'
  }
];

const financialStats = [
  {
    value: '98%',
    label: 'Client Retention Rate',
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    value: 'NPS 85',
    label: 'Net Promoter Score',
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    value: '4.9/5',
    label: 'Client Satisfaction',
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    value: '35%',
    label: 'Average Efficiency Gain',
    icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const softwareTools = [
  { name: 'Xero', icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />, color: '#13B5EA' },
  { name: 'MYOB', icon: <ReceiptIcon sx={{ fontSize: 40 }} />, color: '#00A0E3' },
  { name: 'QuickBooks', icon: <PaymentsIcon sx={{ fontSize: 40 }} />, color: '#2CA01C' },
  { name: 'Sage', icon: <CalculateIcon sx={{ fontSize: 40 }} />, color: '#00DC82' },
  { name: 'Reckon', icon: <AccountTreeIcon sx={{ fontSize: 40 }} />, color: '#FF6B00' },
  { name: 'Microsoft Excel', icon: <AnalyticsIcon sx={{ fontSize: 40 }} />, color: '#217346' },
  { name: 'Power BI', icon: <TrendingUpIcon sx={{ fontSize: 40 }} />, color: '#F2C811' },
  { name: 'Tableau', icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />, color: '#E97627' },
  { name: 'Zoho', icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />, color: '#FF6B00' },
];

const ServiceCard = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        component={RouterLink}
        to={service.path}
        onClick={() => window.scrollTo(0, 0)}
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(135deg, ${service.color} 0%, ${theme.palette.background.paper} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
            '& .service-icon': {
              transform: 'scale(1.1) rotate(5deg)',
            },
            '& .learn-more-button': {
              backgroundColor: 'white',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            },
          },
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box 
            className="service-icon"
            sx={{ 
              mb: 3,
              color: 'white',
              transition: 'transform 0.3s ease',
            }}
          >
            {service.icon}
          </Box>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: 'white',
            }}
          >
            {service.title}
          </Typography>
          <Typography
            color="rgba(255, 255, 255, 0.9)"
            sx={{ mb: 3 }}
          >
            {service.description}
          </Typography>
          <Box
            className="learn-more-button"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: service.color,
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: '50px',
              border: '2px solid',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'white',
                color: service.color,
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
              },
              '&:active': {
                transform: 'translateY(0)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Learn More
            <ArrowForwardIcon sx={{ fontSize: 20 }} />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/financial-pattern.png")',
            opacity: 0.1,
            backgroundSize: 'cover',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', position: 'relative' }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Optimising Business Performance Through Professional Accounting Solutions
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Your trusted partner for comprehensive accounting services and sustainable business growth in Australia.
            </Typography>
            <Button
              onClick={() => window.scrollTo(0, 0)}
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: theme.palette.primary.main,
                border: '2px solid',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: 'white',
                  color: theme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Software Tools Slider */}
      <Box sx={{ 
        py: 2,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ 
            display: 'flex',
            flexWrap: 'nowrap',
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-100%)' },
            },
            '&:hover': {
              animationPlayState: 'paused',
            }
          }}>
            {softwareTools.map((tool, index) => (
              <Grid item key={index} sx={{ minWidth: 200, flexShrink: 0 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      height: 80,
                      bgcolor: 'transparent',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      width: '100%',
                    }}
                  >
                    <Box sx={{ color: tool.color, flexShrink: 0 }}>
                      {tool.icon}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                      }}
                    >
                      {tool.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
            {/* Duplicate items for infinite scroll effect */}
            {softwareTools.map((tool, index) => (
              <Grid item key={`duplicate-${index}`} sx={{ minWidth: 200, flexShrink: 0 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      height: 80,
                      bgcolor: 'transparent',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      width: '100%',
                    }}
                  >
                    <Box sx={{ color: tool.color, flexShrink: 0 }}>
                      {tool.icon}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                      }}
                    >
                      {tool.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Financial Stats Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {financialStats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      height: '100%',
                      minHeight: 200,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        transform: 'translateY(-4px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>{stat.icon}</Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        lineHeight: 1.4,
                        px: 1,
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Our Professional Services
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                color: '#e0e7ff',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                maxWidth: 800,
                mx: 'auto',
                opacity: 0.9,
              }}
            >
              Comprehensive accounting and business advisory services tailored to meet your organisation's requirements.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Trust Indicators Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Trusted by Professional Services Firms Nationwide
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Our team of qualified professionals maintains the highest standards of accuracy and regulatory compliance. We are committed to delivering excellence in accounting and business advisory services across Australia.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    ✓ Certified Accountants
                  </Typography>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    ✓ Industry Compliance
                  </Typography>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    ✓ Data Security
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Why Choose Us
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    'Expert financial analysis and reporting',
                    'Comprehensive tax planning and compliance',
                    'Advanced accounting software integration',
                    'Dedicated financial advisors',
                    'Regular performance reviews',
                    'Customized financial solutions',
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <VerifiedUserIcon sx={{ color: 'primary.main' }} />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Box 
            sx={{ 
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Ready to Enhance Your Business Operations Through Professional Accounting Solutions?
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  mb: 6, 
                  color: '#e0e7ff',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                Let's discuss how our professional services can optimise your financial operations and support your business objectives.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#1e40af',
                    border: '2px solid',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#1e3a8a',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&:active': {
                      transform: 'translateY(0)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: 'white',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src="pricing-preview.jpg"
                    alt="Pricing Plans"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 4,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Flexible Pricing Options
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      Tailored to your business needs
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Transparent Service Packages
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                  }}
                >
                  Select a service package that aligns with your organisation's requirements and budgetary considerations. Our pricing structure is designed to support your business growth and scalability.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/pricing"
                  onClick={() => window.scrollTo(0, 0)}
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Pricing Plans
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section Preview */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Our Professional Journey
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: '#e0e7ff',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                  }}
                >
                  Discover how our expertise and innovation have established new benchmarks in professional accounting services.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More About Our Organisation
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                >
                  <Box
                    component="img"
                    src="/about-preview.jpg"
                    alt="About Us"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 4,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Excellence in Outsourcing Services
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      Trusted by Professionals Across Industries
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 