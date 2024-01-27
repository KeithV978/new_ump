import * as React from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import { useNavigate } from "react-router-dom";
import { HELP_DESK, MESSAGES, PROFILE } from "../../../constants/routes";
import {
  BellOutlined,
  LogoutOutlined,
  MessageFilled,
  // MessageOutlined,
  PlusCircleFilled,
  // PlusCircleOutlined,
  QuestionCircleFilled,
  // QuestionCircleOutlined,
  ShopFilled,
  UserOutlined,
} from "@ant-design/icons";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "../Modal";

export const MenuPanel = () => {
  const [userMenu, setUserMenu] = React.useState(null);
  const [addProductDialog, setAddProductDialog] = React.useState(null);
  const [messagingDialog, setMessagingDialog] = React.useState(null);
  const [notificationBadge, setNotificationBadge] = React.useState(true);
  const [messagesBadge, setMessagesBadge] = React.useState(true);
  const open = Boolean(userMenu);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserMenuOpen = (event) => setUserMenu(event.currentTarget);

  const handleAddProductDialog = (value) => setAddProductDialog(value);

  const handleMessagingDialog = (value) => setMessagingDialog(value);

  const handleUserMenuClose = () => setUserMenu(null);

  const handleNavigation = (path) => {
    navigate(path);
    window.location.reload();
  };

  React.useEffect(() => {
    setMessagesBadge(false);
    setNotificationBadge(false);
  }, []);
  return (
    <Box
      sx={{
        display: { sm: "flex", xs: "none" },
        flexDirection: "row",
        color: "#e6e6e6",
      }}
    >
      <Tooltip title="Add A Product">
        <IconButton
          onClick={() => handleAddProductDialog(true)}
          sx={{ margin: "0 .4rem" }}
        >
          <PlusCircleFilled style={{ fontSize: "1.3rem" }} />
        </IconButton>
      </Tooltip>
      <>
        <Tooltip title="User">
          <Avatar
            onClick={handleUserMenuOpen}
            id="user-button"
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ margin: "0 .1rem" }}
          >
            <UserOutlined style={{ fontSize: "1.3rem" }} />
          </Avatar>
        </Tooltip>
        <Menu
          id="user-menu"
          anchorEl={userMenu}
          open={open}
          onClose={handleUserMenuClose}
          MenuListProps={{
            "aria-labelledby": "user-button",
          }}
        >
          {[
            {
              icon: <ShopFilled sx={{ color: "#666666", fontSize: ".9rem" }} />,
              text: "Profile",
              action: () => {
                handleNavigation(PROFILE);
              },
            },
            {
              icon: (
                <LogoutOutlined sx={{ color: "#666666", fontSize: ".9rem" }} />
              ),
              text: "Logout",
              action: () => dispatch(),
            },
          ].map((item, index) => {
            return (
              <MenuItem key={index} onClick={item.action}>
                <ListItemIcon> {item.icon}</ListItemIcon>
                <ListItemText> {item.text}</ListItemText>
              </MenuItem>
            );
          })}
        </Menu>
      </>
      <Tooltip title="Notifications">
        <IconButton onClick={() => {}} sx={{ margin: "0 .1rem" }}>
          <Badge
            color="secondary"
            variant="dot"
            invisible={notificationBadge}
            overlap="circular"
          >
            <BellOutlined style={{ fontSize: "1.3rem" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Messages">
        <IconButton
          onClick={() => handleMessagingDialog(MESSAGES)}
          sx={{ margin: "0 .1rem" }}
        >
          <Badge
            color="secondary"
            variant="dot"
            invisible={messagesBadge}
            overlap="circular"
          >
            <MessageFilled style={{ fontSize: "1.3rem" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Help Desk">
        <IconButton
          onClick={() => handleNavigation(HELP_DESK)}
          sx={{ margin: "0 .1rem" }}
        >
          <QuestionCircleFilled style={{ fontSize: "1.3rem" }} />
        </IconButton>
      </Tooltip>
      {addProductDialog && (
        <Modal
          opener={addProductDialog}
          setOpener={handleAddProductDialog}
          sender="add_product"
        />
      )}
      {messagingDialog && (
        <Modal
          opener={messagingDialog}
          setOpener={handleMessagingDialog}
          sender="messaging"
        />
      )}
    </Box>
  );
};
