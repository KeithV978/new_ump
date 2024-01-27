import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { ActionsPanel, Color, Label, Output, Quote } from "./components";
import Tags from "./components/Tags";

const MobileDevices = ({ product }) => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={5}>
          <div>
            <Output>
              <Label>Headline:</Label>
              <Typography fontWeight="bold">{product.headline}</Typography>
            </Output>

            <Output>
              <Label>Price:</Label>
              <Typography fontWeight="bold">
                <Quote>{displayMoney(product.price)}</Quote>
              </Typography>
            </Output>
            <Output>
              <Label>
                {product?.transaction_mode === "sell"
                  ? "Seller's Name:"
                  : "Swapper's Name"}
              </Label>
              <Typography fontWeight="bold">{product.sellers_name}</Typography>
            </Output>
            {product.brand && (
              <Output>
                <Label>
                  Brand
                  {/* <BrandingWatermark sx={{ fontSize: ".9rem" }} /> */}:
                </Label>
                <Typography fontWeight="bold"> {product.brand}</Typography>
              </Output>
            )}
            {product.frontcamera && (
              <Output>
                <Label>
                  Front Camera
                  {/* <Camera sx={{ fontSize: ".9rem" }} /> */}:
                </Label>
                <Typography fontWeight="bold">
                  {" "}
                  {product.frontcamera}
                  {" MP "}
                </Typography>
              </Output>
            )}
            {product.backcamera && (
              <Output>
                <Label>
                  Back Camera
                  {/* <Camera sx={{ fontSize: ".9rem" }} /> */}:
                </Label>
                <Typography fontWeight="bold">
                  {" "}
                  {product.backcamera}
                  {" MP "}
                </Typography>
              </Output>
            )}
            {product.battery && (
              <Output>
                <Label>
                  Battery{" "}
                  {/* <BatteryChargingFullRounded sx={{ fontSize: ".9rem" }} /> */}
                  :
                </Label>
                <Typography fontWeight="bold">
                  {product.battery}
                  {" mAh "}
                </Typography>
              </Output>
            )}
            <Output>
              <Label>
                {product?.transaction_mode === "sell"
                  ? "Seller's Rating:"
                  : "Swapper's Rating"}
              </Label>
              <Rating
                name="seller rating"
                value={product.rating || 0}
                size="small"
                readOnly
              />
            </Output>
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div>
            {product.storage && (
              <Output>
                <Label>
                  Storage
                  {/* <SdStorageRounded sx={{ fontSize: ".9rem" }} /> */}:
                </Label>
                <Typography fontWeight="bold">
                  {" "}
                  {product.storage}
                  {" GB "}
                </Typography>
              </Output>
            )}
            {product.ramsize && (
              <Output>
                <Label>RAM:</Label>
                <Typography fontWeight="bold">
                  {product.ramsize}
                  {" GB "}
                </Typography>
              </Output>
            )}
            {product.color && (
              <Output>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Typography fontWeight="bold">{product.color}</Typography>
                  <span style={{ color: "#fff" }}> {" ~ "}</span>{" "}
                  <Color color={product.color} />
                </span>
              </Output>
            )}{" "}
            {product.screensize && (
              <Output>
                <Label>
                  Screen Size
                  {/* <FitScreenRounded sx={{ fontSize: ".9rem" }} /> */}:
                </Label>
                <Typography fontWeight="bold">
                  {product.screensize}
                  {'"'}
                </Typography>
              </Output>
            )}
            {product.newness && (
              <Output>
                <Label>Newness</Label>
                <Typography fontWeight="bold">{product.newness}</Typography>
              </Output>
            )}
            {product.simslot && (
              <Output>
                <Label>SIM Slot:</Label>
                <Typography fontWeight="bold">{product.simslot}</Typography>
              </Output>
            )}
            {product.description && (
              <Output>
                <Label>Seller's Message:</Label>
                <Typography fontWeight="400">{product.description}</Typography>
              </Output>
            )}
            {product.dateAdded && (
              <Output>
                <Label>Date Added:</Label>
                <Typography fontWeight="bold">
                  {new Date(product.dateAdded).toLocaleDateString()}
                </Typography>
              </Output>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          {product.tags && (
            <Output>
              <Label>Tags:</Label>
              <span>
                <Tags items={product.tags} />
              </span>
            </Output>
          )}
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: { sm: "block", xs: "none" } }}>
          <ActionsPanel
                mode={product.transaction_mode}
                headline={product.headline}
                seller={product.displayName}
                phone={product.phone}
                />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileDevices;
