import { Box, Button, Container, Typography } from "@mui/material";
import { useDocumentTitle, useScrollTop } from "../../hooks";

const NoInternet = () => {
    useScrollTop();
    useDocumentTitle('No Internet | Uniben Marketplace');

    return (
        <Box>
            <Container>
                <Typography variant="h1">
                    {':( No internet Connection.'}
                </Typography>

                <Typography variant="p">
                    {'Please check your network connectivity and try again.'}
                </Typography>
                <br/>

                <Button
                    type="Submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2}}
                    onClick={() => window.location.reload(true)}
                >
                    Try Again
                </Button>
            </Container>
        </Box>
    )
}

export default NoInternet;