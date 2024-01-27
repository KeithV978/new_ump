import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material";
import { useDocumentTitle } from "../../hooks";
import { LeftSidePanel } from "./LeftSidePanel";

// const StyledPaper = styled(Paper)(({ theme }) => ({}));
const Profile = () => {
  useDocumentTitle(`@username - Uniben Marketplace`);
  return (
    <React.Fragment>
      <Box sx={{ marginTop: "1.5rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={false} sm={3}>
            <Box>
              <LeftSidePanel />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6.5}>
            {/* <AddProductsPanel/> */}
          </Grid>
          <Grid item xs={false} sm={2.5}>
            <Box>{/* <Trending/> */}</Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Profile;
