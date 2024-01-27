import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { useTheme } from "@mui/material";
import {motion} from 'framer-motion'

import { Link } from "react-router-dom";
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


const categories = [
    {
      htext: "Phone Stores",
      icon: <PhoneIphoneRounded fontSize="inherit" color="inherit" />,
      // img: phone,
      link: "/search/?q=phones",
    },
    {
      htext: "Gadget Stores",
      icon: <Headphones fontSize="inherit" color="inherit" />,
      // img: phone_accessories,
      link: "/search?q=phone+accessories",
    },
    {
      htext: "Food Stores",
      icon: <CakeRounded fontSize="inherit" color="inherit" />,
      // img: foods,
      link: "/search?q=foods",
    },
    {
      htext: "Fashion Stores",
      icon: <WatchRounded fontSize="inherit" color="inherit" />,
      // img: cloths,
      link: "/search?q=fashion",
    },
    {
      htext: "Real Estate Stores",
      icon: <HouseRounded fontSize="inherit" color="inherit" />,
      // img: apertment,
      link: "/search?q=real+estate",
    },
    {
      htext: "Furniture Stores",
      icon: <ChairRounded fontSize="inherit" color="inherit" />,
      // img: furniture,
      link: "/search?q=furnitures",
    },
    {
      htext: "Book Stores",
      icon: <AutoStoriesRounded fontSize="inherit" color="inherit" />,
      // img: books,
      link: "/search?q=books",
    },
    {
      htext: "Home Appliances Stores",
      icon: <HomeMaxRounded fontSize="inherit" color="inherit" />,
      // img: appliance,
      link: "/search?q=home+appliances",
    },
    {
      htext: "Computer Stores",
      icon: <LaptopChromebookRounded fontSize="inherit" color="inherit" />,
      // img: laptop,
      link: "/search?q=computers",
    },
    {
      htext: "Vehicle Dealers",
      icon: <AirportShuttleRounded fontSize="inherit" color="inherit" />,
      // img: vehicle,
      link: "/search?q=vehicles",
    },
    {
      htext: "Services",
      icon: <EngineeringRounded fontSize="inherit" color="inherit" />,
      // img: services,
      link: "/search?q=services",
    },
    
  ];

export const StoreCategoriesGrid = () => {
    // const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          width: '100%',
          backgroundImage: {sm: `linear-gradient(-162.13085269580532deg, #020024 0.001%, #360066 47.496932104891734%, #580066 98.09823414395672%)`, xs: '#fff'},
          borderRadius: "10px",
          padding: '1rem .8rem',
          boxShadow:
          "0px 20px 25px -5px rgba(0 0 0 / 0.1), 0 8px 10px -6px rgba(0 0 0 /0.1)",
        }}
      >
          <Typography
          sx={{ color: "#fff", fontWeight: 600, padding: ".5rem 0" }}
        >
         Browse by store categories
        </Typography>
        <Grid container spacing={1}>
          {categories.map((item, index) => (
            <Grid item xs={3} key={index}>
              <Link to={item.link}>
                
                  <Box 
                  component={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                    sx={{
                      position: "relative",
                      backgroundColor: "#ffffff52",
                      borderRadius: "7px",
                      boxShadow: '0px 20px 25px -5px rgba(0 0 0 / 0.1), 0 8px 10px -6px rgba(0 0 0 /0.1)',
                      minHeight: "15vh",
                      width: '100%',
                    }}
                    >
                    <span
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        padding: ".5rem .2rem",
                      }}
                    >
                      <Typography sx={{ color: "#fff" }}>
                        {item.icon}
                      </Typography>
                      <Typography sx={{ color: "#e0e0e0", fontSize: {sm: '.6rem', xs: '.8rem'} }}>
                        {item.htext}
                      </Typography>
                    </span>
                  </Box> 
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};
