import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { Label, Output, Quote, Color, ActionsPanel } from "./components";
import Tags from "./components/Tags";
import Box from "@mui/material/Box";

const Fashion = ({ product }) => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={5}>
          <div>
            {product.headline && (
              <Output>
                <Label>
                  {/* <ViewHeadlineRounded sx={{ fontSize: ".9rem" }} /> */}
                  Headline:
                </Label>
                <Typography fontWeight="bold">{product.headline}</Typography>
              </Output>
            )}

            {product.price && (
              <Output>
                <Label>Price:</Label>
                <Typography fontWeight="bold">
                  <Quote>{displayMoney(product.price)}</Quote>
                </Typography>
              </Output>
            )}
            {product.color && (
              <Output>
                <Label>Color:</Label>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Typography fontWeight="bold">{product.color}</Typography>
                  <span style={{ color: "#fff" }}> {" ~ "}</span>{" "}
                  <Color color={product.color} />
                </span>
              </Output>
            )}
            {product.sellers_name && (
              <Output>
                <Label>
                  {product?.transaction_mode === "sell"
                    ? "Seller's Name:"
                    : "Swapper's Name"}
                </Label>
                <Typography fontWeight="bold">
                  {product.sellers_name}
                </Typography>
              </Output>
            )}
            {product.gender && (
              <Output>
                <Label>
                  {/* <WcRounded sx={{ fontSize: ".9rem" }} /> */}
                  Gender:
                </Label>
                <Typography fontWeight="bold">{product.gender}</Typography>
              </Output>
            )}

            {product.newness && (
              <Output>
                <Label>Newness:</Label>
                <Typography fontWeight="bold">{product.newness}</Typography>
              </Output>
            )}
          </div>
        </Grid>

        <Grid item xs={6} sm={5}>
          <div>
            {product.size && (
              <Output>
                <Label>Size:</Label>
                <Typography fontWeight="bold">{product.size}</Typography>
              </Output>
            )}

            {product.transaction_mode && (
              <Output>
                <Label>Sell or Swap:</Label>
                <Typography fontWeight="bold">
                  {product.transaction_mode}
                </Typography>
              </Output>
            )}
            {"rating" && (
              <Output>
                <Label>
                  {product.transaction_mode === "sell"
                    ? "Seller's Rating:"
                    : "Swapper's Rating"}
                </Label>
                <Rating name="seller rating" value={3} size="small" readOnly />
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
      {/* <Grid container>  */}
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
      {/* </Grid> */}
    </Fragment>
  );
};

export default Fashion;
