import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { ActionsPanel, Label, Output } from "./components";

const Services = ({ product }) => {
  return (
    <Fragment>
      {product.headline && (
        <Output>
          <Label>{"Business Name/Service Provider"}</Label>
          <Typography fontWeight="bold">{product.headline}</Typography>
        </Output>
      )}
      {product.service && (
        <Output>
          <Label>{"Service"}</Label>
          <Typography fontWeight="bold">{product.service}</Typography>
        </Output>
      )}
      {product.address && (
        <Output>
          <Label>{"Business Address"}</Label>
          <Typography fontWeight="bold">{product.address}</Typography>
        </Output>
      )}
      {product.phone && (
        <Output>
          <Label>{"Contact Number(s)"}</Label>

          {product.phone.map((phone, index) => {
            return (
              <Typography key={index} fontWeight="bold">
                {phone} {index + 1 === product.phone.length ? "." : ","}
              </Typography>
            );
          })}
        </Output>
      )}
      <Output>
        <Label>Business Rating:</Label>
        <Rating
          name="seller rating"
          value={product.rating}
          size="small"
          readOnly
        />
      </Output>
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

export default Services;
