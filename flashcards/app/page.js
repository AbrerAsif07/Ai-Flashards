import Image from "next/image"
export default function Home() {
  return (

import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper
  } from '@mui/material';
  import { styled } from '@mui/system';

  const HeroSection = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    padding: '0 20px',
  });

  const Feature = ({ title, description }) => (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Paper>
    </Grid>
  );

  const PricingOption = ({ title, price, description }) => (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          {price}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Paper>
    </Grid>
  );

  export default function Home() {
    return (
      <Container maxWidth="lg">
        {/* Hero Section */}
        <HeroSection>
          <Typography variant="h2" component="h1" gutterBottom>
            Transform Text into Flashcards
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            An AI-powered tool to convert your notes into interactive flashcards effortlessly.
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" size="large" sx={{ marginRight: 2 }}>
              Sign Up
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Login
            </Button>
          </Box>
        </HeroSection>

        {/* Features Section */}
        <Box mt={8}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Feature
              title="AI-Powered"
              description="Automatically generate flashcards from your text."
            />
            <Feature
              title="Customizable"
              description="Personalize your flashcards to fit your study needs."
            />
            <Feature
              title="Efficient Learning"
              description="Review flashcards in a way that boosts retention and understanding."
            />
          </Grid>
        </Box>

        {/* Pricing Section */}
        <Box mt={8}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Pricing
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <PricingOption
              title="Basic"
              price="$0/month"
              description="Free forever with basic features."
            />
            <PricingOption
              title="Pro"
              price="$9.99/month"
              description="Advanced features for power users."
            />
            <PricingOption
              title="Enterprise"
              price="Contact Us"
              description="Custom solutions for large teams."
            />
          </Grid>
        </Box>
      </Container>
    );
  }

)
}

