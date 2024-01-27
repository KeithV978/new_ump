import { LoadingOutlined } from "@ant-design/icons";
// import ChevronRight from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CustomButton = ({ isLoading }) => (
  <Box sx={{ margin: "1rem 0" }}>
    <Button
      disabled={isLoading}
      type="Submit"
      fullWidth
      variant="contained"
      sx={{ p: ".5rem 1.5rem", backgroundColor: "tertiary.main" }}
      // onClick={next}
    >
      {"Post!"}
      {isLoading && (
        <>
          Posting <LoadingOutlined />
        </>
      )}
    </Button>
  </Box>
);

export default CustomButton;
