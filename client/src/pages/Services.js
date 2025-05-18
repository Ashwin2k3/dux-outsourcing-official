import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader,
  useTheme,
  useMediaQuery,
  Divider,
  CardActions,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useNavigate } from 'react-router-dom';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const services = [
  {
    id: 'accounting',
    title: 'Accounting Solutions',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    description: 'Our qualified accounting professionals provide comprehensive end-to-end accounting services for chartered accounting firms and businesses. Our expertise encompasses:',
    features: [
      'Transaction processing and reconciliation',
      'Accounts receivable and payable management',
      'General ledger and bank reconciliation',
      'Financial data preparation for payroll and Business Activity Statements'
    ],
    tagline: 'Enhance your financial operations through professional accounting solutions'
  },
  {
    id: 'payroll',
    title: 'Payroll Compliance',
    icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
    description: 'Our payroll specialists deliver comprehensive payroll management services, ensuring compliance with Australian regulatory requirements:',
    features: [
      'Employee onboarding and management',
      'Leave entitlement tracking and management',
      'Superannuation processing and compliance',
      'Single Touch Payroll (STP) reporting and compliance'
    ],
    tagline: 'Optimise your payroll management through professional compliance solutions'
  },
  {
    id: 'bas',
    title: 'BAS Returns',
    icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    description: 'Our taxation specialists provide expert management of Business Activity Statements and related compliance requirements:',
    features: [
      'Goods and Services Tax (GST) reporting',
      'Pay As You Go (PAYG) processing',
      'Fringe Benefits Tax (FBT) reporting',
      'Australian Taxation Office (ATO) compliance'
    ],
    tagline: 'Ensure regulatory compliance through professional BAS management'
  },
  {
    id: 'tax',
    title: 'Tax Returns',
    icon: <CalculateIcon sx={{ fontSize: 40 }} />,
    description: 'Our taxation professionals deliver comprehensive tax preparation and lodgement services in accordance with Australian taxation legislation:',
    features: [
      'Business tax return preparation',
      'Individual tax return lodgement',
      'Tax planning and advisory services',
      'ATO compliance and reporting'
    ],
    tagline: 'Navigate Australian taxation requirements with professional expertise'
  },
  {
    id: 'smsf',
    title: 'SMSF Compliance',
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
    description: 'Our SMSF specialists provide comprehensive compliance management for Self-Managed Super Funds:',
    features: [
      'SMSF compliance and reporting',
      'Financial statement preparation',
      'Tax return lodgement',
      'Regulatory compliance management'
    ],
    tagline: 'Maintain SMSF compliance through professional fund management'
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting',
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    description: 'Our financial reporting specialists deliver comprehensive analysis and reporting services to support informed business decisions:',
    features: [
      'Financial statement preparation',
      'Management reporting',
      'Business performance analysis',
      'Strategic financial planning'
    ],
    tagline: 'Enhance business performance through professional financial reporting'
  },
  {
    id: 'document-automation',
    title: 'Document Automation',
    icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
    description: 'Our document automation specialists implement advanced solutions to enhance operational efficiency:',
    features: [
      'Document processing automation',
      'Workflow optimisation',
      'Digital transformation solutions',
      'Process efficiency enhancement'
    ],
    tagline: 'Transform business operations through professional automation solutions'
  }
];

const ServiceCard = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[8],
          },
          transition: 'all 0.3s ease',
        }}
      >
        <CardHeader
          avatar={service.icon}
          title={
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              {service.title}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
              {service.tagline}
            </Typography>
          }
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body1" paragraph>
            {service.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box component="ul" sx={{ pl: 2 }}>
            {service.features.map((feature, index) => (
              <Typography 
                key={index} 
                component="li" 
                variant="body2" 
                sx={{ mb: 1 }}
              >
                {feature}
              </Typography>
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate(`/services/${service.id}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Comprehensive accounting and tax services tailored to meet your business needs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Contact us today to discuss how we can help streamline your accounting processes
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 