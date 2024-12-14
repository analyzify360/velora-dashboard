import React from 'react';
import { Container } from '@mui/material';
import WelcomeBanner from '../components/Home/WelcomeBanner';
import TopPoolsSnapshot from '../components/Home/TopPoolsSnapshot';
import RecentEvents from '../components/Home/RecentEvents';

const HomePage = () => {
  return (
    <Container className="homepage" sx={{ padding: '20px' }}>
      <WelcomeBanner />
      <TopPoolsSnapshot />
      <RecentEvents />
    </Container>
  );
};

export default HomePage;