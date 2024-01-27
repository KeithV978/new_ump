import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContactSupportRounded from "@mui/icons-material/ContactSupportRounded";

import { motion } from "framer-motion";

import { Spin as Hamburger } from "hamburger-react";

import logo from "../../../Assets/Images/logo/logo01.svg";
import { UserMenu } from "./component/UserMenu";
import { Searchbar } from "./component/Searchbar";
import { MobileDrawer } from "./MobileDrawer";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const links = [
  {text: 'Shop', link: '/'},
  { text: "Sell", link: "/seller/product/add/sell" },
  { text: "Swap", link: "/seller/product/add/swap" },
  { text: "Auction", link: "/seller/product/add/auction" },
  { text: "Request", link: "/request/add" },
];

export const SubMenubar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link)
    window.location.reload()
  }
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", color: "primary.main" }}>
      <MobileDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Container>
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <motion.div
          // component={motion.div}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <IconButton
            size="large"
            edge="start"
            color="primary.main"
            aria-label="open drawer"
            sx={{ display: { xs: "flex", sm: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <Hamburger
              toggled={drawerOpen}
              color="#7d2278"
              distance="sm"
              size={20}
              rounded
              label="category menu bar"
            />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#fff",
                border: '.1rem solid #7d2278',
                display: { xs: "none", sm: "block" },
              }}
              href="/"
            >
              <Typography
                // component="a"
                sx={{
                  textDecoration: "none",
                  display: { xs: "none", sm: "flex" },
                  // color: '#7d2278'
                }}
              >
                logo
              </Typography>
            </IconButton>
            <Typography
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <img src={logo} alt="logo" />
            </Typography>
            {links.map((item, index) => (
              <motion.span
                key={index}
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.95 }}
              >
                <Button onClick={event => handleClick(item.link)}>{item.text}</Button>
              </motion.span>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ y: "-50vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <Searchbar />
        </motion.div>
        <motion.div
          initial={{ x: "50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
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
                sx={{ color: "inherit" }}
              />
            </IconButton>
            <UserMenu />
          </div>
        </motion.div>
      </Toolbar>
      </Container>
    </Box>
  );
};
