import Box from "@mui/material/Box";
import Adjust from "@mui/icons-material/Adjust";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { displayMoney } from "../../../../../helpers/utils";
import { ActionsPanel, Label, Output, Quote } from "./components";
import Tags from "./components/Tags";

const RealEstate = ({ product }) => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={5}>
          {product.headline && (
            <Output>
              <Label>Headline:</Label>
              <Typography fontWeight="bold">{product.headline}</Typography>
            </Output>
          )}{" "}
          {product.sub_category && (
            <Output>
              <Label>Type:</Label>
              <Typography fontWeight="bold">{product.sub_category}</Typography>
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
          {product.newness && (
            <Output>
              <Label>Newness:</Label>
              <Typography fontWeight="bold">{product.newness}</Typography>
            </Output>
          )}{" "}
          {product.location && (
            <Output>
              <Label>Location:</Label>
              <Typography fontWeight="bold">{product.location}</Typography>
            </Output>
          )}{" "}
          {product.amenities && (
            <Output>
              <Label>Amenities:</Label>
              <List dense={true}>
                {Object.keys(product.amenities).map((key) =>
                  product.amenities[key] === "" ? null : (
                    <ListItem key={key} disableGutters disablePadding>
                      <ListItemIcon>
                        <Adjust
                          sx={{
                            color: "tertiary.main",
                            fontSize: ".9rem",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={product.amenities[key]} />
                    </ListItem>
                  )
                )}
              </List>
            </Output>
          )}{" "}
        </Grid>

        <Grid item xs={12} sm={6}>
          {product.sellers_name && (
            <Output>
              <Label>
                {product?.transaction_mode === "swap"
                  ? "Swapper's Name"
                  : "Agent's Name:"}
              </Label>
              <Typography fontWeight="bold">{product.sellers_name}</Typography>
            </Output>
          )}

          {product.description && (
            <Output>
              <Label>Seller's Message:</Label>
              <Typography fontWeight="400">{product.description}</Typography>
            </Output>
          )}
          <Output>
            <Label>{"Agent's Rating:"}</Label>
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

export default RealEstate;
