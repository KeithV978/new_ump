import { motion } from "framer-motion";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import PhoneIphoneRounded from "@mui/icons-material/PhoneIphoneRounded";
import Headphones from "@mui/icons-material/Headphones";
import AirportShuttleRounded from "@mui/icons-material/AirportShuttleRounded";
import EngineeringRounded from "@mui/icons-material/EngineeringRounded";
import AutoStoriesRounded from "@mui/icons-material/AutoStoriesRounded";
import HouseRounded from "@mui/icons-material/HouseRounded";
import CakeRounded from "@mui/icons-material/CakeRounded";
import WatchRounded from "@mui/icons-material/WatchRounded";
import LaptopChromebookRounded from "@mui/icons-material/LaptopChromebookRounded";
import ChairRounded from "@mui/icons-material/ChairRounded";
import HomeMaxRounded from "@mui/icons-material/HomeMaxRounded";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { TitleBar } from "../../Components/Common";

const categories = [
  {
    htext: "Phone Stores",
    icon: <PhoneIphoneRounded fontSize="inherit" color="inherit" />,
    // img: phone,
    link: "/search/phones",
  },
  {
    htext: "Gadget Stores",
    icon: <Headphones fontSize="inherit" color="inherit" />,
    // img: phone_accessories,
    link: "/search/phone accessories",
  },
  {
    htext: "Food Stores",
    icon: <CakeRounded fontSize="inherit" color="inherit" />,
    // img: foods,
    link: "/search/foods",
  },
  {
    htext: "Fashion Stores",
    icon: <WatchRounded fontSize="inherit" color="inherit" />,
    // img: cloths,
    link: "/search/fashion",
  },
  {
    htext: "Real Estate Stores",
    icon: <HouseRounded fontSize="inherit" color="inherit" />,
    // img: apertment,
    link: "/search/real estate",
  },
  {
    htext: "Furniture Stores",
    icon: <ChairRounded fontSize="inherit" color="inherit" />,
    // img: furniture,
    link: "/search/furnitures",
  },
  {
    htext: "Book Stores",
    icon: <AutoStoriesRounded fontSize="inherit" color="inherit" />,
    // img: books,
    link: "/search/books",
  },
  {
    htext: "Home Appliance Stores",
    icon: <HomeMaxRounded fontSize="inherit" color="inherit" />,
    // img: appliance,
    link: "/search/home appliances",
  },
  {
    htext: "Computer Stores",
    icon: <LaptopChromebookRounded fontSize="inherit" color="inherit" />,
    // img: laptop,
    link: "/search/computers",
  },
  {
    htext: "Vehicle Dealers",
    icon: <AirportShuttleRounded fontSize="inherit" color="inherit" />,
    // img: vehicle,
    link: "/search/vehicles",
  },
  {
    htext: "Artisan Services",
    icon: <EngineeringRounded fontSize="inherit" color="inherit" />,
    // img: services,
    link: "/search/services",
  },
];
export const ProductsCategory = ({ type }) => {
  if (type === "grid") {
    return (
      <Box
        // component={Paper}
        // elevation={4}
        sx={{
          // height: "30vh",
          width: "100%",
          borderRadius: "2px",
          // padding: { xs: ".5rem", sm: "1rem" },
        }}
      >
        <Typography
          sx={{ color: "tertiary.main", fontWeight: 600, padding: ".5rem 0" }}
        >
          Browse by category
        </Typography>
        <Grid container spacing={1}>
          {categories.map((item, index) => (
            <Grid item xs={3} key={index}>
              <Link href={item.link}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Box 
                    sx={{
                      position: "relative",
                      backgroundColor: "#fff",
                      borderRadius: "3px",
                      height: "15vh",
                      boxShadow: '0px 20px 25px -5px rgba(0 0 0 / 0.1), 0 8px 10px -6px rgba(0 0 0 /0.1)'
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        padding: ".5rem .4rem",
                      }}
                    >
                      <Typography sx={{ color: "tertiary.main" }}>
                        {item.icon}
                      </Typography>
                      <Typography sx={{ color: "#282828" }}>
                        {item.htext}
                      </Typography>
                    </div>
                  </Box>
                </motion.div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  return (
    <Box
      component={Paper}
      elevation={4}
      sx={{
        borderRadius: "5px",
        padding: "1rem .5rem",
        display: { xs: "none", sm: "block" },
      }}
    >
     <TitleBar>{"Shop By Categories"}</TitleBar>
      <List dense={true}>
        {categories.map((item, index) => (
          <Link key={index} href={item.link} sx={{ textDecoration: "none" }}>
            <motion.div
              initial={{ scale: 0, color: "#282828" }}
              animate={{ scale: 0.95 }}
              whileHover={{ scale: 1, color: "#E91E63", originX: 0 }}
              transition={{ ease: "easeIn" }}
            >
              <ListItem>
                <ListItemIcon sx={{ color: "tertiary.main" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText sx={{ color: "inherit" }} primary={item.htext} />
              </ListItem>
              <Divider />
            </motion.div>
          </Link>
        ))}
      </List>
    </Box>
  );
};
