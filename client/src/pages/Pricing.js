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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Full-Time Professional',
    price: 'AUD 1,800 - 3,500',
    description: 'Monthly investment for organisations requiring dedicated professional support and comprehensive service delivery',
    features: [
      'Dedicated professional resource',
      '40 hours per week commitment',
      'Comprehensive accounting and taxation services',
      'Priority professional support',
      'Direct communication channels',
      'Monthly financial performance reports',
      'Strategic financial analysis',
      'Customised reporting solutions',
      'Goods and Services Tax (GST) compliance',
      'Strategic business planning',
      'Professional payroll management',
      'Dedicated account relationship manager',
      'Regular performance reviews',
    ],
    color: 'primary.light',
    popular: false,
  },
  {
    name: 'Part-Time Professional',
    price: 'AUD 900 - 1,750',
    description: 'Monthly investment for organisations requiring professional support on a part-time basis',
    features: [
      'Dedicated professional resource',
      '20 hours per week commitment',
      'Essential accounting services',
      'Professional support channels',
      'Monthly financial performance reports',
      'Transaction processing and reconciliation',
      'Professional bookkeeping services',
      'Goods and Services Tax (GST) compliance',
      'Payroll management services',
      'Regular performance reviews',
    ],
    color: 'primary.main',
    popular: true,
  },
  {
    name: 'Professional Consultation',
    price: 'AUD 12 - 18 per hour',
    description: 'Flexible professional services for ad-hoc organisational requirements',
    features: [
      'Pay-as-you-go professional service model',
      'Flexible engagement hours',
      'Essential accounting services',
      'Professional support channels',
      'Transaction processing and reconciliation',
      'Professional bookkeeping services',
      'Goods and Services Tax (GST) compliance',
      'Payroll management services',
      'On-demand professional support',
      'Hourly professional service billing',
    ],
    color: 'secondary.main',
    popular: false,
  },
];

const serviceDetails = [
  {
    service: 'Accounting Solutions',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'BAS Returns',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Payroll Compliances',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Tax Returns',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'SMSF Compliance',
    basic: '✗',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Financial Analysis',
    basic: '✗',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Custom Reporting',
    basic: '✗',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Strategic Planning',
    basic: '✗',
    professional: '✗',
    enterprise: '✓',
  },
  {
    service: 'API Integration',
    basic: '✗',
    professional: '✗',
    enterprise: '✓',
  },
];

const PricingCard = ({ plan }) => {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid',
          borderColor: plan.color,
          transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
          '&:hover': {
            transform: plan.popular ? 'scale(1.05) translateY(-8px)' : 'translateY(-8px)',
            boxShadow: 6,
          },
          transition: 'all 0.3s ease',
        }}
      >
        {plan.popular && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bgcolor: 'primary.main',
              color: 'white',
              px: 2,
              py: 1,
              borderRadius: '4px',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Most Popular
          </Box>
        )}
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
            {plan.name}
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            {plan.price}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {plan.description}
          </Typography>
          <Box sx={{ mb: 4 }}>
            {plan.features.map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />
                <Typography>{feature}</Typography>
              </Box>
            ))}
          </Box>
          <Button
            variant={plan.popular ? "contained" : "outlined"}
            fullWidth
            component={RouterLink}
            to={`/contact?plan=${encodeURIComponent(plan.name)}`}
            sx={{
              mt: 'auto',
              py: 1.5,
              borderRadius: '50px',
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              },
              ...(plan.popular ? {
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              } : {
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                }
              })
            }}
          >
            {plan.name === 'Full-Time Professional' ? 'Hire Full-Time Professional Expert' : 
             plan.name === 'Part-Time Professional' ? 'Hire Part-Time Professional Expert' : 
             'Book Consultation'}
          </Button>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ 
                fontSize: '0.75rem',
                display: 'block',
                mt: 1,
              }}
            >
              Terms & Conditions Apply
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ 
                fontSize: '0.75rem',
                display: 'block',
                mt: 0.5,
              }}
            >
              {plan.name === 'Full-Time Professional' ? 'Minimum 3 months commitment; software cost Exclusive' : 
               plan.name === 'Part-Time Professional' ? 'Minimum 2 months commitment; software cost Exclusive' : 
               'Minimum 10 hours per booking; software cost Exclusive'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
  const theme = useTheme();

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
              Professional Service Packages
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
              }}
            >
              Select a professional service package tailored to your organisation's requirements. All packages include dedicated professional support and comprehensive reporting capabilities.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Pricing Plans */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {pricingPlans.map((plan) => (
              <Grid item xs={12} sm={6} md={4} key={plan.name}>
                <PricingCard plan={plan} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Feature Comparison */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Feature Comparison
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              Compare our plans to find the perfect fit for your business
            </Typography>
          </Box>

          <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service</TableCell>
                  <TableCell align="center">Basic</TableCell>
                  <TableCell align="center">Professional</TableCell>
                  <TableCell align="center">Enterprise</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {serviceDetails.map((row) => (
                  <TableRow key={row.service}>
                    <TableCell component="th" scope="row">
                      {row.service}
                    </TableCell>
                    <TableCell align="center">{row.basic}</TableCell>
                    <TableCell align="center">{row.professional}</TableCell>
                    <TableCell align="center">{row.enterprise}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  How is the professional service hourly rate calculated?
                </Typography>
                <Typography color="text.secondary">
                  Our professional service hourly rates are calculated based on the actual time dedicated to your organisation's requirements. We maintain detailed time records and provide comprehensive reports of professional services rendered.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Can we modify our professional service package?
                </Typography>
                <Typography color="text.secondary">
                  Yes, organisations may adjust their professional service package at any time. Upgrades to service packages take effect immediately, while modifications to lower-tier packages apply at the commencement of the next billing cycle.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  What payment methods are available for professional services?
                </Typography>
                <Typography color="text.secondary">
                  We accept all major credit cards, electronic funds transfer, and PayPal for professional service payments. Enterprise clients may establish customised payment arrangements.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  What are the minimum engagement terms?
                </Typography>
                <Typography color="text.secondary">
                  Please refer to the terms and conditions specific to each professional service package for minimum engagement requirements.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{ mb: 4, fontWeight: 700 }}
            >
              Commence Professional Consultation
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 6, opacity: 0.9 }}
            >
              Contact our professional team to discuss your organisation's specific requirements and obtain a customised quotation
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                backgroundColor: '#f8fafc',
                color: '#f8fafc',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: '#f1f5f9',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Schedule Professional Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing; 