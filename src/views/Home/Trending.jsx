import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { TitleBar } from "../../Components/Common";
import { Typography } from "@mui/material";

export const Trending = () => {
  return (
    <Box
      component={Paper}
      elevation={4}
      sx={{
        borderRadius: "2px",
        padding: '1rem'
        // height: "10vh",
        // display: {xs:'false', sm: 'block'}
      }}
    >
      <TitleBar>{" Trending"}</TitleBar>
      <Box sx={{padding: "1rem"}}>
        <Typography sx={{fontSize: '.8rem'}}>See what other students are sellings</Typography>
        <ul style={{color: '#656464', padding: '0', fontSize: '.7rem'}}>
          <li>iphones</li>
          <li>Wristwatches</li>
          <li>Books</li>
        </ul>
      </Box>
    </Box>
  );
};
