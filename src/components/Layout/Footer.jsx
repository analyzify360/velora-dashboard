import React from 'react';
import { IconButton, Typography, Box, SvgIcon } from '@mui/material';
import { Twitter, Telegram } from '@mui/icons-material';
import { ReactComponent as DiscordIcon } from '../../logo.svg'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#333' }}>
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
          <SvgIcon component={DiscordIcon} />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;