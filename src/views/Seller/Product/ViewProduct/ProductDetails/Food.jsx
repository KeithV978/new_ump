import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { ActionsPanel, Label, Output, Quote } from "./components";
import Tags from "./components/Tags";

const Food = ({ product }) => {
  return (
    <Fragment>
      {product.headline && (
        <Output>
          <Label>{"Food Item:"}</Label>
          <Typography fontWeight="bold">{product.headline}</Typography>
        </Output>
      )}
      <Output>
        <Label>{"Price (per plate):"}</Label>
        <Typography fontWeight="bold">
          <Quote>{displayMoney(product.price)}</Quote>
        </Typography>
      </Output>
      {product.tags && (
        <Output>
          <Label>Tags:</Label>
          <span>
            <Tags items={product.tags} />
          </span>
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
          value={product.rating || 3.5}
          size="small"
          readOnly
        />
      </Output>
      {product.dateAdded && (
        <Output>
          <Label>Date Added:</Label>
          <Typography fontWeight="bold">
            {new Date(product.dateAdded).toLocaleDateString()}
          </Typography>
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
    </Fragment>
  );
};

export default Food;
