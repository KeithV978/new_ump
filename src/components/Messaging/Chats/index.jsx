import Box from "@mui/material/Box";
// import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { DisplayPhoto } from "../DisplayPhoto";
import vic from "../../../assets/images/chats/vic.png";
import { ChatArea } from "./ChatArea";
import { InputPanel } from "./ChatArea/InputPanel";

export const Chats = (props) => {
  // let {messages, username} = props;
  let messages = "just chats";
  let username = "victor";
  let photoUrl = vic;
  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          color: "#000",
          //   boxShadow: "0px 10px 10px #d7d7d7",
          //   boxShadow: "0px 4px 20px 3px #d9d9d9",
          // alignItems: 'center',
        }}
      >
        <Toolbar>
          <DisplayPhoto Image={photoUrl} />
          <Typography>{username}</Typography>
        </Toolbar>
      </Box>
      {/* check and be sure user is logged in before enabling sending messages to seller */}
      <ChatArea>
        {messages}
        <InputPanel />
      </ChatArea>
    </Box>
  );
};
