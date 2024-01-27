import Adjust from "@mui/icons-material/Adjust";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export const AddProductFooter = () => (
  <Box sx={{ padding: "1.5rem 1rem" }}>
    <Typography color="tertiary.main" fontWeight="bold">
      {"Please Take Note of The Following"}
    </Typography>
    <List dense={true}>
      {[
        `Ensure goods to be sold or swapped are in good conditions. Do
      not mislead your buyers.`,
        `By Uploading an item you legally agree to be identified as a seller on unibenmarketplace.com`,
      ].map((item, index) => {
        return (
          <ListItem key={index} disableGutters disablePadding>
            <ListItemIcon>
              <Adjust
                sx={{
                  color: "tertiary.main",
                  fontSize: ".9rem",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        );
      })}
    </List>
  </Box>
);
