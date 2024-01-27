import { Box } from "@mui/material"
import { useDocumentTitle, useScrollTop } from "../../../hooks";

const EditAccount = () => {
  useScrollTop();
  useDocumentTitle('Edit Account | Uniben Marketplace');
  return (
    <Box>
        Edit Account
    </Box>
  )
}
export default EditAccount 