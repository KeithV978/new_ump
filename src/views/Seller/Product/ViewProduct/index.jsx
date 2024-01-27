// import { HighlightOff } from "@mui/icons-material";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useParams } from "react-router-dom";
import React, { lazy, useEffect, useState } from "react";
import { MessageDisplay } from "../../../../Components/Common";
// import { displayMoney } from "../../../../helpers/utils";
import { useDocumentTitle, useScrollTop } from "../../../../hooks";
// import Select from "react-select";
import { LoadingOutlined } from "@ant-design/icons";
// import productData from "../../../../devData/productData";
import RelatedItems from "./RelatedItems";
// import ItemsDetails from "./ItemsDetails";
import Business from "@mui/icons-material/Business";
import Check from "@mui/icons-material/Check";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";

import defaultImage from "../../../../Assets/Images/productImage/No-Image-Placeholder.svg.png";
import { ImageCarousel } from "../../../../Components/Common";

import productData from "../../../../devData/productData";
import { ActionsPanel } from "./ProductDetails/components";

import { motion } from "framer-motion";
import Paper from "@mui/material/Paper";
import ShoppingBag from "@mui/icons-material/ShoppingBag";

// import DisplayForms
const Vehicles = lazy(() => import("./ProductDetails/Vehicles"));
const Services = lazy(() => import("./ProductDetails/Services"));
const RealEstate = lazy(() => import("./ProductDetails/RealEstate"));
const MobileDevices = lazy(() => import("./ProductDetails/MobileDevices"));
const HomeAppliances = lazy(() => import("./ProductDetails/HomeAppliances"));
const Gadget = lazy(() => import("./ProductDetails/Gadgets"));
const Furniture = lazy(() => import("./ProductDetails/Furniture"));
const Food = lazy(() => import("./ProductDetails/Food"));
const Fashion = lazy(() => import("./ProductDetails/Fashion"));
const Computer = lazy(() => import("./ProductDetails/Computer"));
const FashionAccessories = lazy(() =>
  import("./ProductDetails/FashionAccessories")
);
const Book = lazy(() => import("./ProductDetails/Book"));

const ViewProduct = () => {
  const { productId, category } = useParams();
  const id = Number(productId);
  // const { product, isLoading, error } = useProduct({id, category});

  const [product, setProduct] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const [selectedImage, setSelectedImage] = useState(product?.image || '');

  useScrollTop();
  useDocumentTitle(`${product?.headline || "View Item"} | Product Page`);

  useEffect(() => {
    // setSelectedImage(product?.image);
    const result = productData.find((item) => item.id === id);
    // console.log(result)
    setProduct(result);
    setError("");
    setLoading(false);
  }, [product, id]);

  return (
    <Box sx={{ position: "relative", marginTop: '1.5rem' }}>
      <Box>
        <div style={{ padding: { sm: "1rem 0", xs: "2rem 0" } }}>
          <Container>
            {" "}
            {product.category === "services" ? (
              <div style={{ display: "flex" }}>
                <Typography variant="h5">{product.headline}</Typography>
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "tertiary.main",
                    height: "1.4rem",
                    width: "1.4rem",
                  }}
                >
                  <Check sx={{ color: "#fff" }} />
                </Box>
              </div>
            ) : (
              <>
                <Typography variant="h5">
                  {product.category === "real_estate" ? "Property" : "Product"}{" "}
                  {"#"}
                  {product?.id}
                  <span style={{ color: "#aaa", fontSize: ".9rem" }}>
                    {" ("}
                    <RemoveRedEye sx={{ fontSize: ".9rem" }} />{" "}
                    {product.numberOfViews || 0}{" "}
                    {Number(product.numberOfViews) < 2 ? "view" : "views"}
                    {") "}
                  </span>
                </Typography>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <ShoppingBag
                    sx={{ color: "tertiary.main", fontSize: 'inherit' }}
                  />{" "}
                  <Typography variant="body2" sx={{ color: "#aaa" }}>
                    {product.headline}
                  </Typography>
                </span>
              </>
            )}
          </Container>
        </div>
      </Box>
      <Container>
        {isLoading && (
          <div className="loader">
            <h4>Loading Product...</h4>
            <br />
            <LoadingOutlined style={{ fontSize: "3rem" }} />
          </div>
        )}
        {error && <MessageDisplay message={error} />}
        {product && !isLoading && (
          <Box>
            <main>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box 
                  component={Paper} 
                  // elevation={5}
                  sx={{ padding: '.5rem .5rem 0 .5rem', borderRadius: '.1rem' }}>
                    <div
                      style={{
                        // backgroundColor: "#fff",
                        // border: ".1rem solid #ffedb9",
                        
                      }}
                    >
                      <ImageCarousel
                        images={
                          product.imageUrls ? product.imageUrls : defaultImage
                        }
                        transitionTime={1000}
                        showThumbs={false}
                        showIndicators={true}
                        infiniteLoop={true}
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <div style={{ padding: { sm: "0 1rem", xs: "0" } }}>
                    {/* <Divider
                      sx={{
                        borderColor: "#dbdbdb",
                        // borderImage: "linear-gradient(45deg, red, orangered)1 10%",
                        marginBottom: ".3rem",
                        borderWidth: ".1rem",
                      }}
                    /> */}
                    {/* <ItemsDetails product={product} /> */}
                    <Typography
                      sx={{
                        color: "tertiary.main",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        alignItems: "center",
                      }}
                    >
                      {category === "services"
                        ? "Business Details"
                        : category === "real_estate"
                        ? "Property  Details"
                        : "Product  Details"}
                      {category === "services" ? (
                        <Business sx={{ fontSize: "1rem" }} />
                      ) : null}{" "}
                    </Typography>
                    <Box
                      // component={Paper}
                      // elevation={4}
                      sx={{
                        mt: 3,
                        mb: { sm: 7, xs: 3 },
                        p: 1,
                        backgroundColor: "#fafafa",
                        // border: {sm:'.1rem solid #f6f6f6', xs: 'none'},
                        borderRadius: "5px",
                      }}
                    >
                      {(() => {
                        switch (category) {
                          case "books":
                            return <Book product={product} />;
                          case "mobile_devices":
                            return <MobileDevices product={product} />;
                          case "foods":
                            return <Food product={product} />;
                          case "gadgets":
                            return <Gadget product={product} />;
                          case "fashion":
                            return <Fashion product={product} />;
                          case "fashion_accessories":
                            return <FashionAccessories product={product} />;
                          case "real_estate":
                            return <RealEstate product={product} />;
                          case "furnitures":
                            return <Furniture product={product} />;
                          case "home_appliances":
                            return <HomeAppliances product={product} />;
                          case "computers":
                            return <Computer product={product} />;
                          case "vehicles":
                            return <Vehicles product={product} />;
                          case "services":
                            return <Services product={product} />;
                          default:
                            <Box>
                              <Typography>Loading</Typography>
                              <Typography>
                                If details do not load in 1 minute, please
                                refresh this page. And if it persists contact
                                Admin via support email
                              </Typography>
                            </Box>;
                            break;
                        }
                      })()}
                      <br />
                      {
                        product.category === "services" ||
                        product.category === "foods"
                          ? null
                          : null
                        // <Divider
                        //   sx={{
                        //     border: ".1rem solid #ccc",
                        //     display: { sm: "flex", xs: "none" },
                        //   }}
                        // />
                      }
                    </Box>
                  </div>
                  <Box
          sx={{
            display: { sm: "none", xs: "block" },
            position: "sticky",
            bottom: ".5rem",
          }}
        >
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", delay: 0.5 }}
          >
            <ActionsPanel
              mode={product.transaction_mode}
              headline={product.headline}
              seller={product.displayName}
              phone={product.phone}
            />
          </motion.div>
        </Box>
                </Grid>
                <Grid item xs={12}>
                  {/* <br /> */}
                  <RelatedItems />
                </Grid>
              </Grid>
            </main>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ViewProduct;
