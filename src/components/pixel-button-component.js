import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const PixelButton = ({ children, href, onClick, sx, width, height }) => {

    const heightValue = parseFloat(height);
    const sideHeight = `${heightValue * 0.7}px`;
    const sideWidth = `${heightValue * 0.15}px`;

    const mainStyle = {
        fontFamily: "'Press Start 2P', cursive",
        backgroundColor: 'black',
        width: width,
        height: height,
        padding: '10px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      };

      const sideStyle = {
        backgroundColor: 'black',
        height: sideHeight,
        width: sideWidth,
        ...sx,
      };
    

      return (
        <Button 
            href={href}
            onClick={onClick} 
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                    '& > div': {
                        bgcolor: 'primary.dark',
                    }
                }
            }}>
                <Box sx={{ ...sideStyle }} />
                <Box sx={{ ...mainStyle }}>
                    {children}
                </Box>
                <Box sx={{ ...sideStyle }} />
            </Box>
        </Button>
      );
};

export default PixelButton;
