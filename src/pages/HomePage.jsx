import React from 'react';
import { Container } from '@mui/material';
import WelcomeBanner from '../components/Home/WelcomeBanner';
import FeaturedMetrics from '../components/Home/FeaturedMetrics';
import TopPoolsSnapshot from '../components/Home/TopPoolsSnapshot';
import RecentEvents from '../components/Home/RecentEvents';
import KeyFeatures from '../components/Home/KeyFeatures';
import CallToAction from '../components/Home/CallToAction';

const HomePage = () => {
  return (
    <Container className="homepage" sx={{ padding: '20px' }}>
      <WelcomeBanner />
      <FeaturedMetrics />
      <TopPoolsSnapshot />
      <RecentEvents />
      <KeyFeatures />
      <CallToAction />
    </Container>
  );
};

export default HomePage;