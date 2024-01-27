import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { Color, Label, Output, Quote, ActionsPanel } from "./components";
import Tags from "./components/Tags";
import Box from "@mui/material/Box";
// import { AuctionsPanel } from "./components/auctionsPanel";

const Vehicles = ({ product }) => {
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
            {product.model && (
              <Output>
                <Label>Model:</Label>
                <Typography fontWeight="bold">{product.model}</Typography>
              </Output>
            )}
            {product.interior && (
              <Output>
                <Label>Interior:</Label>
                <Typography fontWeight="bold">{product.interior}</Typography>
              </Output>
            )}
            {product.year && (
              <Output>
                <Label>Year:</Label>
                <Typography fontWeight="bold">{product.year}</Typography>
              </Output>
            )}
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          {product.color && (
            <Output>
              <span style={{ display: "flex", alignItems: "center" }}>
                <Typography fontWeight="bold">{product.color}</Typography>
                <span style={{ color: "#fff" }}> {" ~ "}</span>{" "}
                <Color color={product.color} />
              </span>
            </Output>
          )}{" "}
          {product.grade && (
            <Output>
              <Label>
                Grade
                {/* <FitScreenRounded sx={{ fontSize: ".9rem" }} /> */}:
              </Label>
              <Typography fontWeight="bold">{product.grade}</Typography>
            </Output>
          )}
          {product.accidented && (
            <Output>
              <Label>Accidented:</Label>
              <Typography fontWeight="bold">{product.accidented}</Typography>
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
export default Vehicles;
