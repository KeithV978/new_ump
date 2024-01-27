import PropType from 'prop-types';
import React, { Fragment, useState} from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Box, styled, Typography } from '@mui/material';

const StyledImg = styled('div')(() => ({
    width: '45px',
    padding: "0 .5rem",
    marginTop: '.7rem',
    // backgroundColor: '#f6f6f6'
  }))

const ImageLoader = ({ src, alt, fileName, size }) => {
    const loadedImages = {};
    const [loaded, setLoaded] = useState(loadedImages[src]);

    const onLoad = () => {
        loadedImages[src] = true;
        setLoaded(true);
    };

    return(
        <Fragment>
            {!loaded && (
                <LoadingOutlined style={{
                    position: 'absolute', 
                    top: 0, 
                    bottom: 0, 
                    right: 0, 
                    left: 0, 
                    margin: 'auto'
                }}
                />
            )}
           <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <StyledImg>
                <img
                    width='100%'
                    alt={alt || ''}
                    onLoad={onLoad}
                    src={src}
                    />
            </StyledImg>
            {' - '}
            <Typography variant="body2" 
                sx={{                            
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '70%'
                }}>
                    {fileName}
            </Typography>
            <Typography variant="body2">
                <strong>({Math.round(size*1000)}KB)</strong>
            </Typography>
           </Box>
        </Fragment>
    )
}

ImageLoader.propTypes = {
    src: PropType.string.isRequired,
    alt: PropType.string.isRequired,
}

export default ImageLoader;