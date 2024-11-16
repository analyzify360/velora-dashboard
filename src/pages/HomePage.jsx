import React from 'react';
import { Container } from '@mui/material';
import WelcomeBanner from '../components/home/WelcomeBanner';
import FeaturedMetrics from '../components/home/FeaturedMetrics';
import TopPoolsSnapshot from '../components/home/TopPoolsSnapshot';
import RecentEvents from '../components/home/RecentEvents';
import KeyFeatures from '../components/home/KeyFeatures';
import CallToAction from '../components/home/CallToAction';

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