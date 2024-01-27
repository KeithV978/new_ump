import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { Chats } from "./Chats";

import ElectricBolt from "@mui/icons-material/ElectricBolt";
import { InputPanel } from "./Chats/ChatArea/InputPanel";

export const Messaging = () => {
  const [openChat, setOpenChat] = React.useState(null);

  const handleOpenChats = (chatId) => {
    setOpenChat(true);
  };
  return (
    <div>
      <Box
        sx={{
          margin: "2rem",
          // padding: "0 1rem",
          border: "1px solid #ccc",
          overflowY: "auto",
          overflowX: "hidden",
          backgroundColor: "#f6f6f6",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={3}>
            {/* <Rooms /> */}
          </Grid>
          <Grid item xs={false} sm={9}>
            {/* <ChatArea /> */}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center", marginBottom: ".3rem" }}>
        <Typography sx={{ fontSize: ".7rem", color: "#666666" }}>
          Powered by{" "}
          <ElectricBolt sx={{ fontSize: "inherit", color: "secondary.main" }} />{" "}
          Converse Chat
        </Typography>
      </Box>
    </div>
  );
};
