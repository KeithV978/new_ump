import { Box, Button, Typography } from '@mui/material';
import PropType from 'prop-types';
import React from 'react';

const MessageDisplay = ({
    message, description, buttonLabel, action
}) => (
    <Box>
        <Typography variant='h5' sx={{ wordBreak: 'break-all' }}>{message || 'Message'}</Typography>
        {description && <span>{description}</span>}
        <br/>

        {action && (
            <Button
                type="Submit"
                onClick={action}
                variant="contained"
                sx={{ mt: 3, mb: 2}}>
                {buttonLabel || "Okay"}
            </Button>
        )}
    </Box>
);


MessageDisplay.defaultProps = {
    description: undefined,
    buttonLabel: 'Okay',
    action: undefined
  };
  
  MessageDisplay.propTypes = {
    message: PropType.string.isRequired,
    description: PropType.string,
    buttonLabel: PropType.string,
    action: PropType.func
  };
  
  export default MessageDisplay;
  