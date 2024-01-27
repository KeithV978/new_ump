import { useDocumentTitle, useScrollTop } from "../../hooks";
import PropType from "prop-types";
import { Box, Button, Container, 
  // Divider, 
  Typography } from "@mui/material";
import PageNotFoundImage from "../../Assets/Images/pageNotFound/undraw_page_not_found_re_e9o6.svg";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const PageNotFound = () => {
  useScrollTop();
  useDocumentTitle("Page Not Found | Uniben Marketplace");
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: "7rem", p: 2}}>
      <Container>
        <div 
            style={{
                // margin: 'auto 0',
                width: 'max-content', 
                // background: '#f6f6f6'
                }}>
          <Typography variant="h6" color="primary.main" sx={{letterSpacing: '.1rem', wordWrap: 'wrap'}}>
            {":( The Page you're looking for could not be found."}
          </Typography>
          <br />
          {/* <Divider/> */}
          <br />
          <Box 
            sx={{ 
                width: { xs: "30%", sm: "30%" },
                // width: 'min-content',
                margin: 'auto 0'
                }}>
            <img src={PageNotFoundImage} alt="page not found" width="100%" />
          </Box>
          <Button
            type="Submit"
            variant="outlined"
            sx={{ mt: 3, mb: 2, width: { xs: "30%", sm: "30%" } }}
            onClick={() => navigate(-1)}
          >
            <ArrowBack /> Go Back
          </Button>
        </div>
      </Container>
    </Box>
  );
};

PageNotFound.propTypes = {
  history: PropType.shape({
    goBack: PropType.func,
  }).isRequired,
};

export default PageNotFound;
