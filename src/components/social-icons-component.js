import React from 'react';
import { Box, IconButton } from '@mui/material';
import { LINKS } from '../constants';

function SocialIcons() {

    const iconStyle = {
        width: '24px',
        height: '22px',
        marginLeft: '8px',
        marginRight: '8px',
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
        <Box>
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.TELEGRAM)}>
                <img src="/assets/telegram.png" alt="Telegram" style={iconStyle} />
            </IconButton>
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.TWITTER)}>
                <img src="/assets/twitter.png" alt="Twitter" style={iconStyle} />
            </IconButton>
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.DISCORD)}>
                <img src="/assets/discord.png" alt="Discord" style={iconStyle} />
            </IconButton>
            <IconButton sx={iconButtonStyle} onClick={() => openLinkInNewTab(LINKS.GITHUB)}>
                <img src="/assets/github.png" alt="GitHub" style={iconStyle} />
            </IconButton>
        </Box>
    );
}

export default SocialIcons;
