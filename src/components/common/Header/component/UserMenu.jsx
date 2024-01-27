import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import myAvatar from "../../../../Assets/Images/profile/myAvatar.png";
import { useNavigate } from "react-router-dom";
import { SIGNIN } from "../../../../constants/routes";
import {signOut} from '../../../../Redux/actions/auth_actions'


export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [settings, setSettings] = useState(["Signin"]);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const { profile } = useSelector((state) => ({
    profile: state.profile,
  }));

  useEffect(() => {
    if (profile?.sellerId) setSettings(["Dashboard", "Signout"]);
  }, [profile]);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLinkClick = (text) => {
    handleCloseUserMenu();
    
    switch (text) {
      case "Signin": return navigate(SIGNIN);
      case "Dashboard": return navigate('/seller/dashboard');
      case "Signout": return dispatch(signOut());
      default:
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 0, position: 'relative' }}>
      {/* <Tooltip title="Open User Menu"> */}
      <IconButton
        size="medium"
        aria-label="User Menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={handleOpenUserMenu}
      >
        <Avatar alt="Preach'r" src={myAvatar} />
      </IconButton>
      {/* </Tooltip> */}
      <Menu
        sx={{ mt: "45px", borderRadius: '2px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, index) => (
          <MenuItem key={index} onClick={() => handleLinkClick(setting)}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
