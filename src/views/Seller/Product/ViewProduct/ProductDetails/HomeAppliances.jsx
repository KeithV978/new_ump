import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { ActionsPanel, Label, Output, Quote } from "./components";
import Tags from "./components/Tags";

const HomeAppliances = ({ product }) => {
  return (
    <Fragment>
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
        {product.newness && (
          <Output>
            <Label>Newness</Label>
            <Typography fontWeight="bold">{product.newness}</Typography>
          </Output>
        )}
        <Output>
          <Label>
            {product?.transaction_mode === "sell"
              ? "Seller's Name:"
              : "Swapper's Name"}
          </Label>
          <Typography fontWeight="bold">{product.sellers_name}</Typography>
        </Output>

        {product.size && (
          <Output>
            <Label>Size:</Label>
            <Typography fontWeight="400">{product.size}</Typography>
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

export default HomeAppliances;
