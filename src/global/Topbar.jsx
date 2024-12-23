import React from 'react';
import { Box, IconButton, InputAdornment, InputBase, useMediaQuery, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Topbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      p={2} 
      boxShadow={1} 
      bgcolor="#F6F8FA"
      sx={{ flexWrap: 'wrap' }}
    >
      {/* Search Bar */}
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          maxWidth: isMobile ? '100%' : '70%',
          backgroundColor: 'white',
          borderRadius: '3px',
          px: 1,
        }}
      >
        <InputBase
          placeholder="Search your course"
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>

      {/* Icons and Profile Section */}
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          mt: isMobile ? 2 : 0,
        }}
      >
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <ChatOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Box display="flex" alignItems="center" gap={1}>
          <img 
            src="/profile.png" 
            alt="Profile" 
            style={{
              width: isMobile ? '30px' : '40px',
              height: isMobile ? '30px' : '40px',
              borderRadius: '50%',
              objectFit: 'cover',
            }} 
          />
          {!isMobile && (
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Adeline H. Dancy
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
