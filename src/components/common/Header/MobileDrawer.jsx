import * as React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AirportShuttleRounded from "@mui/icons-material/AirportShuttleRounded";
import AutoStoriesRounded from "@mui/icons-material/AutoStoriesRounded";
import CakeRounded from "@mui/icons-material/CakeRounded";
import ChairRounded from "@mui/icons-material/ChairRounded";
import EngineeringRounded from "@mui/icons-material/EngineeringRounded";
import Headphones from "@mui/icons-material/Headphones";
import HomeMaxRounded from "@mui/icons-material/HomeMaxRounded";
import HouseRounded from "@mui/icons-material/HouseRounded";
import LaptopChromebookRounded from "@mui/icons-material/LaptopChromebookRounded";
import PhoneIphoneRounded from "@mui/icons-material/PhoneIphoneRounded";
import WatchRounded from "@mui/icons-material/WatchRounded";
import { Link } from "react-router-dom";
import { ContactSupportRounded, Filter3Rounded, Home, RequestPageRounded, SellRounded, SwapHorizontalCircleRounded } from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  //   justifyContent: "flex-end",
}));

export const MobileDrawer = ({ drawerOpen, toggleDrawer }) => {
  const anchor = "left";

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText>
            {" "}
            <strong>{"Product Categories"}</strong>
          </ListItemText>
        </ListItem>
        {[
          {
            text: "Phones",
            icon: (
              <PhoneIphoneRounded fontSize="inherit" color="tertiary.main" />
            ),
            // img: phone,
            link: "/search/phones",
          },
          {
            text: "Gadgets",
            icon: <Headphones fontSize="inherit" color="tertiary.main" />,
            // img: phone_accessories,
            link: "/search/phone accessories",
          },
          {
            text: "Foods",
            icon: <CakeRounded fontSize="inherit" color="tertiary.main" />,
            // img: foods,
            link: "/search/foods",
          },
          {
            text: "Fashion",
            icon: <WatchRounded fontSize="inherit" color="tertiary.main" />,
            // img: cloths,
            link: "/search/fashion",
          },
          {
            text: "Real Estate",
            icon: <HouseRounded fontSize="inherit" color="tertiary.main" />,
            // img: apertment,
            link: "/search/real estate",
          },
          {
            text: "Furnitures",
            icon: <ChairRounded fontSize="inherit" color="tertiary.main" />,
            // img: furniture,
            link: "/search/furnitures",
          },
          {
            text: "Books",
            icon: (
              <AutoStoriesRounded fontSize="inherit" color="tertiary.main" />
            ),
            // img: books,
            link: "/search/books",
          },
          {
            text: "Home Appliance",
            icon: <HomeMaxRounded fontSize="inherit" color="tertiary.main" />,
            // img: appliance,
            link: "/search/home appliances",
          },
          {
            text: "Laptops",
            icon: (
              <LaptopChromebookRounded
                fontSize="inherit"
                color="tertiary.main"
              />
            ),
            // img: laptop,
            link: "/search/computers",
          },
          {
            text: "Vehicles",
            icon: (
              <AirportShuttleRounded fontSize="inherit" color="tertiary.main" />
            ),
            // img: vehicle,
            link: "/search/vehicles",
          },
          {
            text: "Services",
            icon: (
              <EngineeringRounded fontSize="inherit" color="tertiary.main" />
            ),
            // img: services,
            link: "/search/services",
          },
        ].map((item, index) => (
          <Link key={index} to={item.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem>
          <ListItemText>
            <strong>{"Links"}</strong>
            {/* <LinkSharp fontSize="inherit" /> */}
          </ListItemText>
        </ListItem>
        {[
          { text: "Home", icon:(<Home fontSize="inheri" color="inherit"/>), link: "/" },
          { text: "Sell", icon:(<SellRounded fontSize="inheri" color="inherit"/>), link: "/seller/product/add/sell" },
          { text: "Swap", icon:(<SwapHorizontalCircleRounded fontSize="inheri" color="inherit"/>), link: "/seller/product/add/swap" },
          { text: "Auction", icon:(<Filter3Rounded fontSize="inheri" color="inherit"/>), link: "/seller/product/add/auction" },
          { text: "Request", icon:(<RequestPageRounded fontSize="inheri" color="inherit"/>), link: "/request/add" },
          { text: "Help Center", icon:(<ContactSupportRounded fontSize="inheri" color="inherit"/>), link: "/help-desk" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, color: "#282828" }}
            animate={{ scale: 0.95 }}
            whileHover={{ scale: 1, color: "#E91E63", originX: 0 }}
            transition={{ ease: "easeIn" }}
          >
            <Link to={item.link}>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText> 
                    <strong>{item.text}</strong>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          </motion.div>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <React.Fragment>
      <div>
        <SwipeableDrawer
          anchor={anchor}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <DrawerHeader>
            <IconButton onClick={toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" color="primary.main" fontWeight={600}>
              Welcome, Shopper!!
            </Typography>
          </DrawerHeader>
          <Divider />

          {list(anchor)}
        </SwipeableDrawer>
      </div>
    </React.Fragment>
  );
};
