import { useDocumentTitle, useScrollTop } from '../../hooks'
import PropType from 'prop-types';
import { Box, Button, Typography } from '@mui/material';


const Error = ({ history }) => {
    useScrollTop();
    useDocumentTitle('Error | Uniben Marketplace');

    return (
        <Box>
            <Typography variant='h1'>
                {':( An error has occured. Please try again.'}
            </Typography>
            <br/>
            <Button
                type="Submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2}}
                onClick={() => history.push('/')}
            >
                Try Again
            </Button>
        </Box>
    )
}

Error.propType = {
    history: PropType.shape({
        push: PropType.func
    }).isRequired
}

export default Error;