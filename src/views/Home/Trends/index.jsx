import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Circle } from "@mui/icons-material";
import { Timer } from "../../../components/timer";

export const Trends = () => {
  const trends = [
    { text: "boyfriend jeans", duration: "00:02:11" },
    { text: "ripped jeans", duration: "00:02:11" },
    { text: "iphone 15 pro", duration: "00:02:11" },
  ];
  return (
    <React.Fragment>
      <Box
        sx={{
        //   width: "90%",
          backgroundImage: {
            sm: `linear-gradient(-162.13085269580532deg, #020024 0.001%, #360066 47.496932104891734%, #580066 98.09823414395672%)`,
            xs: "#fff",
          },
          borderRadius: "10px",
          padding: "1rem",
          boxShadow:
          "0px 20px 25px -5px rgba(0 0 0 / 0.1), 0 8px 10px -6px rgba(0 0 0 /0.1)",
        }}
      >
        <Typography sx={{ color: "#fff", fontWeight: 600, padding: ".5rem 0" }}>
          Trending Items
        </Typography>

        <Box>
          {trends.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ padding: "0" }}>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <Circle sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  backgroundColor: "#ffffff52",
                  borderRadius: "9px",
                  boxShadow:
                    "0px 20px 25px -5px rgba(0 0 0 / 0.1), 0 8px 10px -6px rgba(0 0 0 /0.1)",
                  padding: ".2rem",
                  color: "#e0e0e0",
                  textAlign: "center",
                }}
                >
                <span style={{ 
                  fontSize: ".7rem",
                    display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: ".6rem" }}>
                    <Timer />
                  </span>
                  {item.text}
                </span>
              </ListItemText>
            </ListItem>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
