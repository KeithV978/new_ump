import { LoadingOutlined } from "@ant-design/icons";

import ProductsCard from "./ProductsCard";
import PropType from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TitleBar } from "../Common";

const ProductShowcase = ({
  isLoading,
  title,
  products,
  skeletonCount,
  gap,
  multiRoll,
  logo = "",
  white
}) => {
  return (
    <Box sx={{ padding: ".3rem .4rem"}}>
      <TitleBar white={white}>
        {title}{' '}
        {isLoading ? (
            <span style={{ color: "#fff" }}>
              <LoadingOutlined />
            </span>
          ) : (
            logo
          )}
      </TitleBar>
      {multiRoll ? (
        <Grid
          container
          spacing={gap ? gap : 2}
          sx={{ flexWrap: "wrap", mt: 3, pr: 3}}
        >
          {products &&
            (products.length > 0 ? (
              products.map((product, index) => (
                <Grid key={index} item xs={6} sm={5}>
                  <ProductsCard product={product} />
                </Grid>
              ))
            ) : (
              <Grid item xs={6} sm={5}>
                {new Array(skeletonCount).fill({}).map((product, index) => (
                  <ProductsCard key={index} product={product} />
                ))}
              </Grid>
            ))}
        </Grid>
      ) : (
        <Grid
          container
          spacing={gap ? gap : 2}
          sx={{
            flexWrap: "nowrap",
            overflowX: "auto",
            margin: { sm: ".5rem .5rem .5rem .4rem", xs: 0 },
            padding: '0 1rem 0 0',
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {products &&
            (products.length > 0 ? (
              products.map((product, index) => (
                <Grid key={index} item xs={6} sm={5} sx={{ margin: ".5rem 0" }}>
                  <ProductsCard product={product} />
                </Grid>
              ))
            ) : (
              <Grid item xs={6} sm={6}>
                {new Array(skeletonCount).fill({}).map((product, index) => (
                  <ProductsCard key={index} product={product} />
                ))}
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
};
ProductShowcase.defaultProps = {
  skeletonCount: 14,
};

ProductShowcase.propTypes = {
  title: PropType.string.isRequired,
  skeletonCount: PropType.number,
  isLoading: PropType.bool,
  products: PropType.array.isRequired,
  gap: PropType.number,
  multiRoll: PropType.bool,
};

export default ProductShowcase;
