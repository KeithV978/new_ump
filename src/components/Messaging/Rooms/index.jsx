import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ChatBubbleRounded from "@mui/icons-material/ChatBubbleRounded";

import list from "../messages.json";

export const index = () => {
  const handleOpenChats = () => {};
  return (
    <Box
      // component={Paper}
      sx={{ height: "75vh", backgroundColor: "#fff" }}
    >
      <List>
        <ListItem sx={{ borderBottom: "1px solid #ccc" }}>
          <ListItemIcon>
            <ChatBubbleRounded sx={{ color: "secondary.main" }} />{" "}
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "bold", color: "secondary.main" }}>
            Converse Chat
          </ListItemText>
        </ListItem>
        {list.map((user, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "#fff",
                  transition: "all ease .5s",
                },
                "&:hover & > p": { color: "#fff !important" },
              }}
              onClick={() => handleOpenChats(user.roomId)}
            >
              <ListItemIcon>
                <Avatar />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: "bold",
                  paddingLeft: ".8rem",
                  color: "inherit",
                }}
              >
                <Typography color="inherit">{user.username}</Typography>

                <Typography
                  variant="p"
                  sx={{
                    color: "#666666",
                    fontSize: ".8rem",
                  }}
                >
                  {user.lastmessage}
                </Typography>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
