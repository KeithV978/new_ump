import * as React from "react";
import RemoveRedEyeRounded from "@mui/icons-material/RemoveRedEyeRounded";
import Sell from "@mui/icons-material/SellRounded";
// import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
// import { useTheme } from "@mui/material";
import { displayMoney } from "../../helpers/utils";
import Box from "@mui/material/Box";
import PropType from "prop-types";
import defaultImage from "../../Assets/Images/productImage/No-Image-Placeholder.svg.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { motion } from "framer-motion";
import { AdsClickRounded } from "@mui/icons-material";

const ProductsCard = ({ product }) => {
  let {
    id,
    displayName,
    headline,
    newness,
    grade,
    category,
    rating,
    price,
    imageUrls,
    service,
    location,
    transaction_mode,
    numberOfViews,
  } = product;

  const freshness = newness
    ? newness.charAt(0).toUpperCase() + newness.slice(1)
    : "";
  const car_grade = grade ? grade.charAt(0).toUpperCase() + grade.slice(1) : "";

  let imageContainerHeight = 150;

  const ServiceType = () => {
    switch (service) {
      case "Cooking gas":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> sells Cooking Gas in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Shoemaker":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> sells custom shoes in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Dry Cleaner":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> Dry Cleans clothes in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Painter":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> Paints{" "}
            {/* <strong>{location}</strong> */}
          </Typography>
        );
      case "Electrician":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is an Electrician in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Plumber":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Plumber in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Mechanic":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is an Auto Technician in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Photographer":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Photographer in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Live Band":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Live Band in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Hair Stylist":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Hair Stylist in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Barber":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Barber in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Makeup Artist":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Makeup Artist in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Logistics":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> runs a Delivery Service{" "}
          </Typography>
        );
      case "Fashion Designer":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Fashion Designer in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Interior Decorator":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is an Interior Decorator{" "}
          </Typography>
        );
      case "Event Planner":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Event Planner{" "}
          </Typography>
        );
      case "Caterer":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is a Caterer in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Taxi/Cab":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> runs a Taxi service in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "Artist":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> is an Artist in{" "}
            <strong>{location}</strong>
          </Typography>
        );
      case "SPA":
        return (
          <Typography variant="body1" sx={{ color: "#707070" }}>
            <strong> {displayName} </strong> runs a SPA house at{" "}
            <strong>{location}</strong>
          </Typography>
        );
      default:
        break;
    }
  };

  // const theme = useTheme();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 0.95 }}
      whileHover={{ scale: 1 }}
    >
      <Card
        // elevation={5}
        onClick={() =>{
          navigate(`/seller/product/view/${id}/category/${category}`)
          window.location.reload()
        }}
        sx={{
          overflow: "hidden",
          borderRadius: "5px",
          position: "relative",
          minWidth: { sm: "200px", xs: "160px" },
          maxWidth: 200,
        }}
      >
        <CardActionArea sx={{ position: "relative", overflowX: "hidden" }}>
          {/* <CardHeader>
                    </CardHeader> */}

          {imageUrls ? (
            <CardMedia
              image={imageUrls[0]}
              title={headline}
              // src={}
              sx={{ height: imageContainerHeight }}
            />
          ) : (
            // <Skeleton width="100%" height={200} />
            <CardMedia
              image={defaultImage}
              title={headline}
              // src={}
              sx={{ height: imageContainerHeight }}
            />
          )}

          {/* newness label */}
          {grade === undefined && newness === undefined ? null : (
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                backgroundImage:
                  newness === "new" || grade === "new"
                    ? "linear-gradient(45deg, red, orange)"
                    : `linear-gradient(45deg, #9600ff, #aebaf5)`,
                color: "#fff",
                padding: ".1rem .5rem",
                borderRadius: "5px",
              }}
            >
              <Typography variant="body2">{car_grade || freshness}</Typography>
            </Box>
          )}

          {/* sub_category label */}
          {/* <Box
            sx={{
              position: "absolute",
              top: imageContainerHeight - 30,
              left: 10,
            }}
          >
            {sub_category ? (
              <Chip
                label={sub_category}
                color="secondary"
                size="small"
                sx={{ fontSize: ".7rem" }}
                avatar={
                  <Avatar sx={{ width: ".5rem" }}>
                    <Tag sx={{ fontSize: "1rem" }} />
                  </Avatar>
                }
              />
            ) : (
              <Skeleton width={80} />
            )}
          </Box> */}

          {/* number of views (for user engagement) */}
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            {numberOfViews ? (
              <Chip
                size="small"
                avatar={
                  <Avatar>
                    <RemoveRedEyeRounded sx={{ color: "#fff" }} />
                  </Avatar>
                }
                sx={{ color: "#fff" }}
                label={numberOfViews}
              />
            ) : (
              <Skeleton width={40} />
            )}
          </Box>

          <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
            {category === "services" ? (
              <>
                <Rating
                  name="service rating"
                  value={rating}
                  size="small"
                  readOnly
                />
                ({rating}/5)
              </>
            ) : (
              <Box flex justifyContent="center">
                {price ? (
                  <Typography variant="body1" color="tertiary.main">
                    {/* <span color="#282828"> */}
                    <Sell sx={{ fontSize: "inherit" }} />
                    {/* </span> */}
                    <strong> N{displayMoney(price)}</strong>
                  </Typography>
                ) : (
                  <Skeleton width="100%" height={45} />
                )}
              </Box>
            )}
            {/* <Divider /> */}

            {category === "services" ? (
              <ServiceType />
            ) : 
              displayName && headline ? (
              <Typography
                variant="body2"
                sx={{
                  color: "#707070",
                  pt: ".8rem",
                  overflow: "hidden",
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  whiteSpace: 'pre-wrap'
                }}
              >
                  <span>
                    <strong> {displayName} </strong>
                    {"wants to "}
                    {category === "real_estate" ? (
                      <strong>{"rent out"}</strong>
                    ) : (
                      <span
                        style={{
                          fontWeight: "bold",
                          padding: 0,
                          textDecoration: "italics",
                        }}
                      >
                        {/* {transaction_mode === "Sell" ? (
                        <CurrencyExchange sx={{ fontSize: "1rem" }} />
                      ) : (
                        <SwapHorizontalCircle sx={{ fontSize: "1rem" }} />
                      )} */}
                        {transaction_mode}
                      </span>
                    )}
                    {" this"}
                    <strong style={{
                      // textOverflow: "ellipsis",
                      // whiteSpace: "nowrap",
                      // overflow: "hidden",
                    }}> {headline} </strong>
                  </span>
              </Typography>
                ) : (
                  <Skeleton width="100%" height={45} />
                )}
          </CardContent>
          <Button
            color="tertiary"
            sx={{
              // margin: 'auto 0',
              width: "fit-content",
              textAlign: "center",
              borderRadius: "0px",
              borderTopRightRadius: "17px",
              padding: ".3rem .5rem",
              fontSize: ".7rem",
              color: "#fff",
              backgroundImage: "linear-gradient(45deg, red, orange)",
              boxShadow: '0px 20px 25px -5px rgba(0 0 0 / 0.1), 0 8px 10px -6px rgba(0 0 0 /0.1)',
            }}
            variant="contained"
          >
            View Details <AdsClickRounded fontSize="inherit"/>
          </Button>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

ProductsCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropType.object.isRequired,
};
export default ProductsCard;
