import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
  Avatar,
  Chip,
  Stack,
  Paper,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Business,
  People,
  TrendingUp,
  Security,
  Support,
  Timeline,
  EmojiEvents,
  Speed,
  Handshake,
  Dashboard,
  Assessment,
  Analytics,
  Storage,
  Cloud,
  Security as SecurityIcon,
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  const values = [
    {
      icon: <Security fontSize="large" />,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professional service delivery, ensuring accuracy, compliance, and excellence in all our accounting and financial services.',
      color: theme.palette.primary.main,
    },
    {
      icon: <Handshake fontSize="large" />,
      title: 'Client Partnership',
      description: 'We foster long-term professional relationships built on trust, transparency, and mutual success, working collaboratively to achieve our clients\' strategic objectives.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: 'Innovation & Efficiency',
      description: 'We continuously enhance our service delivery through technological innovation and process optimisation, delivering greater value and efficiency to our clients.',
      color: theme.palette.success.main,
    },
    {
      icon: <People fontSize="large" />,
      title: 'Integrity & Ethics',
      description: 'We uphold the highest ethical standards in all our professional dealings, ensuring compliance with Australian regulatory requirements and maintaining client confidentiality.',
      color: theme.palette.info.main,
    },
    {
      icon: <Timeline fontSize="large" />,
      title: 'Sustainable Growth',
      description: 'We are committed to sustainable business practices that support long-term client success while maintaining the highest standards of corporate responsibility.',
      color: theme.palette.warning.main,
    },
    {
      icon: <Dashboard fontSize="large" />,
      title: 'Operational Excellence',
      description: 'We maintain rigorous quality control and continuous improvement processes to ensure consistent, reliable, and efficient service delivery across all operations.',
      color: theme.palette.error.main,
    }
  ];

  const team = [
    {
      name: 'Manish Gupta',
      role: 'Promoter & Director',
      image: '/team/manish.jpg',
      description: 'Mr Gupta is a qualified Chartered Accountant with over 23 years of professional experience in the financial services sector. His distinguished career includes executive positions with leading multinational corporations in the Information Technology and Telecommunications sectors, including Infosys, Steria, British Telecom, and Hewlett Packard. During his tenure, he has managed Profit & Loss portfolios ranging from AUD 78 million to AUD 2.02 billion. His expertise encompasses strategic business planning, financial controls, commercial management, organisational transformation, operational finance, pricing strategy, project management, financial reporting, cost optimisation, and comprehensive P&L management.',
      expertise: ['Strategic Business Planning', 'Financial Controls', 'Commercial Management', 'P&L Management'],
    },
    {
      name: 'Neeru Gupta',
      role: 'Promoter & Director',
      image: '/team/neeru.jpg',
      description: 'Ms Gupta is a distinguished finance professional with exceptional academic achievements, including distinction in the Chartered Accountancy examination. With over 23 years of professional experience in financial services and regulatory compliance, she has served in executive capacities with prominent Australian organisations across the logistics, food processing, real estate, and packaging sectors. Her expertise encompasses statutory auditing, internal audit management, taxation compliance, corporate governance, taxation assessment proceedings, financial restructuring, banking relationships, and cooperative society audits.',
      expertise: ['Statutory Auditing', 'Taxation Compliance', 'Financial Restructuring', 'Regulatory Affairs'],
    },
    {
      name: 'Laxman Singh Mehra',
      role: 'Australia Business Advisor',
      image: '/team/laxman.jpg',
      description: 'Mr Mehra serves as our esteemed Australia Business Advisor, based in Adelaide. With extensive experience in the Australian market, he provides strategic counsel and local expertise to facilitate successful business operations within the Australian business environment. His comprehensive understanding of Australian regulatory frameworks, market dynamics, and business practices positions him as an invaluable strategic partner for our organisation and clients.',
      expertise: ['Australian Market Strategy', 'Business Advisory', 'Regulatory Compliance', 'Market Entry Strategy'],
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Retention Rate', icon: <Handshake /> },
    { number: 'NPS 85', label: 'Net Promoter Score', icon: <TrendingUp /> },
    { number: '4.9/5', label: 'Client Satisfaction', icon: <EmojiEvents /> },
  ];

  const softwareTools = [
    {
      category: 'Accounting Software',
      tools: [
        { name: 'Xero', description: 'Cloud-based accounting for small to medium businesses' },
        { name: 'MYOB Essential', description: 'Comprehensive accounting solution for Australian businesses' },
        { name: 'AccountRight', description: 'Advanced accounting software for growing businesses' },
        { name: 'QuickBooks', description: 'Popular accounting solution for small businesses' },
      ],
      icon: <Assessment fontSize="large" />,
      color: '#0EA5E9'
    },
    {
      category: 'Enterprise Solutions',
      tools: [
        { name: 'NetSuite', description: 'Cloud ERP for enterprise resource planning' },
        { name: 'SAP', description: 'Enterprise-grade business management software' },
        { name: 'Zoho', description: 'Integrated suite of business applications' },
      ],
      icon: <Business fontSize="large" />,
      color: '#6366F1'
    },
    {
      category: 'Business Intelligence',
      tools: [
        { name: 'Power BI', description: 'Interactive data visualization and analytics' },
        { name: 'Tableau', description: 'Advanced business intelligence and analytics' },
        { name: 'Qlik', description: 'End-to-end data integration and analytics' },
      ],
      icon: <Analytics fontSize="large" />,
      color: '#8B5CF6'
    },
    {
      category: 'Cloud & Security',
      tools: [
        { name: 'Microsoft Azure', description: 'Cloud computing services and solutions' },
        { name: 'AWS', description: 'Secure cloud infrastructure and services' },
        { name: 'Google Cloud', description: 'Enterprise-grade cloud platform' },
      ],
      icon: <Cloud fontSize="large" />,
      color: '#0F766E'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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
            background: 'url("/pattern.png")',
            opacity: 0.1,
          }
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', position: 'relative' }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                About Dux Outsourcing
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 400,
                }}
              >
                Your trusted partner in business process outsourcing
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Our Professional Mission
                </Typography>
                <Typography 
                  paragraph
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  At Dux Outsourcing, we are committed to enhancing organisational efficiency through professional outsourcing solutions. Our mission is to deliver reliable, cost-effective services that enable our clients to focus on their core business objectives while maintaining the highest standards of compliance and service delivery.
                </Typography>
                <Typography 
                  paragraph
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  We establish long-term professional partnerships with our clients, understanding their unique requirements, and delivering tailored solutions that drive sustainable growth and operational excellence.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/about/mission.jpg"
                    alt="Our Mission"
                    sx={{
                      width: '100%',
                      borderRadius: 1,
                      boxShadow: 3,
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.05), transparent)',
            animation: 'shine 8s linear infinite',
            '@keyframes shine': {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(100%)' },
            },
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: 'relative',
              mb: { xs: 8, md: 12 },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                zIndex: 0,
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  mb: 2, 
                  textAlign: 'center',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Executive Leadership Team
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: '#e0e7ff',
                  fontWeight: 400,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  maxWidth: 800,
                  mx: 'auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Meet our distinguished executive leadership team, driving innovation and excellence in professional services
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 4,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 4,
                    background: 'linear-gradient(90deg, #fff 0%, #e0e7ff 100%)',
                    borderRadius: 2,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                      animation: 'shine 2s linear infinite',
                      '@keyframes shine': {
                        '0%': { transform: 'translateX(-100%)' },
                        '100%': { transform: 'translateX(100%)' },
                      },
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Box>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        '& .member-image': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                        },
                      },
                    }}
                  >
                    <Avatar
                      src={member.image}
                      sx={{
                        width: 150,
                        height: 150,
                        mb: 3,
                        border: `4px solid ${theme.palette.primary.main}`,
                        boxShadow: 3,
                      }}
                    />
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1,
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      color="primary"
                      sx={{ 
                        mb: 2, 
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                        textAlign: 'left',
                      }}
                    >
                      {member.description}
                    </Typography>
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      flexWrap="wrap" 
                      useFlexGap
                      sx={{ 
                        width: '100%',
                        justifyContent: 'center',
                      }}
                    >
                      {member.expertise.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size="small"
                          sx={{ 
                            mb: 1,
                            bgcolor: `${theme.palette.primary.main}15`,
                            color: theme.palette.primary.main,
                            '&:hover': {
                              bgcolor: `${theme.palette.primary.main}25`,
                            }
                          }}
                        />
                      ))}
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
       {/* Values Section */}
       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Our Organisational Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: value.color,
                        mb: 2,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: `${value.color}15`,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography 
                      color="text.secondary"
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Software Tools Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Our Technology Stack
          </Typography>
          <Grid container spacing={4}>
            {softwareTools.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${category.color}08 0%, ${theme.palette.background.paper} 100%)`,
                      border: `1px solid ${category.color}20`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${category.color}15`,
                        borderColor: `${category.color}40`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          color: category.color,
                          mr: 2,
                          p: 1.5,
                          borderRadius: '50%',
                          bgcolor: `${category.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: category.color,
                        }}
                      >
                        {category.category}
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ pl: 0 }}>
                      {category.tools.map((tool, toolIndex) => (
                        <Box
                          key={toolIndex}
                          component="li"
                          sx={{
                            listStyle: 'none',
                            mb: 2,
                            p: 2,
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: `${category.color}20`,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              bgcolor: `${category.color}08`,
                              borderColor: category.color,
                              transform: 'translateX(4px)',
                            },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 0.5,
                              color: category.color,
                            }}
                          >
                            {tool.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: '0.9rem',
                              lineHeight: 1.6,
                            }}
                          >
                            {tool.description}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box 
                    sx={{ 
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        color: 'white',
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        display: 'inline-flex',
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                        fontSize: { xs: '2.5rem', md: '3rem' },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography 
                      variant="h6"
                      sx={{
                        opacity: 0.9,
                        fontWeight: 400,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={3}
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3,
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                Ready to Enhance Your Business Operations?
              </Typography>
              <Typography 
                paragraph 
                sx={{ 
                  mb: 4,
                  fontSize: '1.1rem',
                  color: theme.palette.text.secondary,
                }}
              >
                Let's discuss how our professional outsourcing solutions can support your organisation's growth and operational objectives.
              </Typography>
              <Box
                component="a"
                href="/contact"
                sx={{
                  display: 'inline-block',
                  px: 4,
                  py: 2,
                  bgcolor: 'primary.main',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: 3,
                  },
                }}
              >
                Commence Professional Consultation
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 