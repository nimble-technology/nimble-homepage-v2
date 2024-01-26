import React from 'react';
import { Box, IconButton } from '@mui/material';
import { LINKS } from '../constants';

function SocialIcons({isMobile}) {

    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    const iconStyle = {
        width: isMobile? '18px' : '24px',
        height: 'auto',
        marginLeft: isMobile? '3px' : '8px',
        marginRight: isMobile? '3px' : '8px',
    };

    const iconButtonStyle = {
        "&:hover": {
            backgroundColor: "transparent",
            boxShadow: "none",
        },
    };

    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
      };

    return (
        <Box width='100%' sx={{ display: 'flex', flexWrap: 'nowrap' }}> 
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.TELEGRAM)}>
                <img src={baseUrl + "/assets/telegram.png"} alt="Telegram" style={iconStyle} />
            </IconButton>
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.TWITTER)}>
                <img src={baseUrl + "/assets/twitter.png"} alt="Twitter" style={iconStyle} />
            </IconButton>
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.DISCORD)}>
                <img src={baseUrl + "/assets/discord.png"} alt="Discord" style={iconStyle} />
            </IconButton>
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.GITHUB)}>
                <img src={baseUrl + "/assets/github.png"} alt="GitHub" style={iconStyle} />
            </IconButton>
        </Box>
    );
}

export default SocialIcons;
