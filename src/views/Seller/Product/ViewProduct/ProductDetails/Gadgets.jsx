import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { ActionsPanel, Color, Label, Output, Quote } from "./components";
import Tags from "./components/Tags";

const Gadgets = ({ product }) => {
  return (
    <Fragment>
      <div>
        <Output>
          <Label>Headline:</Label>
          <Typography fontWeight="bold">
            {/* <Quote> */}
            {product.headline}
            {/* </Quote> */}
          </Typography>
        </Output>
        <Output>
          <Label>Price:</Label>
          <Typography fontWeight="bold">
            <Quote>{displayMoney(product.price)}</Quote>
          </Typography>
        </Output>
        {product.newness && (
          <Output>
            <Label>Newness</Label>
            <Typography fontWeight="bold">{product.newness}</Typography>
          </Output>
        )}
        {/* {product.color && (
          <Output>
            <Label>Color:</Label>
            <Typography fontWeight="bold">{product.color}</Typography>
          </Output>
        )} */}
        {product.color && (
          <Output>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Typography fontWeight="bold">{product.color}</Typography>
              <span style={{ color: "#fff" }}> {" ~ "}</span>{" "}
              <Color color={product.color} />
            </span>
          </Output>
        )}{" "}
        <Output>
          <Label>
            {product?.transaction_mode === "sell"
              ? "Seller's Name:"
              : "Swapper's Name"}
          </Label>
          <Typography fontWeight="bold">{product.sellers_name}</Typography>
        </Output>
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
        {product.description && (
          <Output>
            <Label>Seller's Message:</Label>
            <Typography fontWeight="400">{product.description}</Typography>
          </Output>
        )}
        {product.tags && (
          <Output>
            <Label>Tags:</Label>
            <span>
              <Tags items={product.tags} />
            </span>
          </Output>
        )}
        <Box sx={{ display: { sm: "block", xs: "none" } }}>
          <ActionsPanel
            mode={product.transaction_mode}
            headline={product.headline}
            seller={product.displayName}
            phone={product.phone}
          />
        </Box>
      </div>
    </Fragment>
  );
};

export default Gadgets;
