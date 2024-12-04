import React from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import { Twitter, Telegram, Discord } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <Typography variant="body1" gutterBottom>
        &copy; 2024 Nestlest
      </Typography>
      <Box>
        <IconButton
          component="a"
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </IconButton>
        <IconButton
          component="a"
          href="https://telegram.me/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <Telegram />
        </IconButton>
        <IconButton
          component="a"
          href="https://discord.com/invite/yourinvite"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <Discord />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;