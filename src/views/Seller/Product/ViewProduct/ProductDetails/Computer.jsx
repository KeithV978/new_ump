import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { ActionsPanel, Color, Label, Output, Quote } from "./components";
import Tags from "./components/Tags";

const Computer = ({ product }) => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={5}>
        <div style={{backgroundColor: '#fff', padding: '.4rem', border: ".1rem solid #ffedb9",marginBottom: ".4rem"}}>

          {product.headline && (
            <Output>
              <Label>Headline:</Label>
              <Typography fontWeight="bold">{product.headline}</Typography>
            </Output>
          )}{" "}
          {product.price && (
            <Output>
              <Label>Price:</Label>
              <Typography fontWeight="bold">
                <Quote>{displayMoney(product.price)}</Quote>
              </Typography>
            </Output>
          )}
          {product.brand && (
            <Output>
              <Label>Brand:</Label>
              <Typography fontWeight="bold">{product.brand}</Typography>
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
          {product.storage && (
            <Output>
              <Label>Storage:</Label>
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
          {product.screensize && (
            <Output>
              <Label>{"Screen size (inches):"}</Label>
              <Typography fontWeight="bold">
                {product.screensize}
                {'"'}
              </Typography>
            </Output>
          )}
          </div>
        </Grid>

        <Grid item xs={6} sm={6}>
          {product.sellers_name && (
            <Output>
              <Label>
                {product?.transaction_mode === "sell"
                  ? "Seller's Name:"
                  : "Swapper's Name"}
              </Label>
              <Typography fontWeight="bold">{product.sellers_name}</Typography>
            </Output>
          )}
          {product.battery && (
            <Output>
              <Label>{"Battery(mAh):"}</Label>
              <Typography fontWeight="bold">{product.battery}</Typography>
            </Output>
          )}
          {product.newness && (
            <Output>
              <Label>Newness:</Label>
              <Typography fontWeight="bold">{product.newness}</Typography>
            </Output>
          )}
          {product.description && (
            <Output>
              <Label>Seller's Message:</Label>
              <Typography fontWeight="400">{product.description}</Typography>
            </Output>
          )}
          <Output>
            <Label>
              {product?.transaction_mode === "sell"
                ? "Seller's Rating:"
                : "Swapper's Rating"}
            </Label>
            <Rating name="seller rating" value={3} size="small" readOnly />
          </Output>
          {product.dateAdded && (
            <Output>
              <Label>Date Added:</Label>
              <Typography fontWeight="bold">
                {new Date(product.dateAdded).toLocaleDateString()}
              </Typography>
            </Output>
          )}
        </Grid>
      </Grid>
      {/* <Box container> */}
      <Grid item xs={12}>
      <div style={{backgroundColor: '#fff', padding: '.4rem', border: ".1rem solid #ffedb9"}}>

        {product.tags && (
          <Output>
            <Label>Tags:</Label>
            <span>
              <Tags items={product.tags} />
            </span>
          </Output>
        )}
        </div>
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

export default Computer;
