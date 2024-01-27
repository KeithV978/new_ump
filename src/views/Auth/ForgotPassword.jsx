import { Box } from "@mui/material"
import { useDocumentTitle, useScrollTop } from "../../hooks";

const ForgotPassword = () => {
    useScrollTop();
  useDocumentTitle('Signup | Uniben Marketplace');
    return (
        <Box>
            Forgot Password
        </Box>
    )
}

export default ForgotPassword