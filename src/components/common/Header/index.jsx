import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ContactSupportRounded from "@mui/icons-material/ContactSupportRounded";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

import { SubMenubar } from "./SubMenubar";
import { UserMenu } from "./component/UserMenu";

import { motion } from "framer-motion";
const app_name = `Uniben Marketplace`;

const Header = () => { 
  const [showSubMenu, setShowSubMenu] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowSubMenu(true);
      } else {
        setShowSubMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        {!showSubMenu ? (
          <Container>
            <Toolbar
              sx={{ display: "flex", justifyContent: "space-between" }}
              disableGutters
            >
              <Box>
                {/* <img src={logo} alt="logo"/> */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.1 }}
                  transition={{ ease: "easeIn" }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: {sm:2, xs:3},
                      pl:1,
                      // display: { xs: "none", md: "flex" },
                      fontWeight: 700,
                      letterSpacing: {sm:".2rem", xs: '.1rem'},
                      textDecoration: "none",
                    }}
                  >
                    {app_name}
                    <span style={{ fontWeight: 400 }}>&#174;</span>
                  </Typography>
                </motion.div>
              </Box>

              <div style={{ display: "flex" }}>
                <IconButton
                  href="/help-desk"
                  sx={{
                    textDecoration: "none",
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  <ContactSupportRounded
                    fontSize="inherit"
                    sx={{ color: "#fff" }}
                  />
                </IconButton>
                <UserMenu />
              </div>
            </Toolbar>
          </Container>
        ) : (
          <SubMenubar />
        )}
      </AppBar>
    </Box>
  );
};

export default Header;
