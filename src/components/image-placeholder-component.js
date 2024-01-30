import React, { useState } from 'react';

const ImageWithPlaceholder = ({ src, placeholderSrc, className, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            className={className}
            src={loaded ? src : placeholderSrc}
            style={{ opacity: loaded ? 1 : 0.5 }}
            onLoad={() => setLoaded(true)}
            {...props}
        />
    );
};

export default ImageWithPlaceholder;

