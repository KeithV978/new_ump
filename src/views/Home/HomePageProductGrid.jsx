import Box from "@mui/material/Box";

import {
  AuctionsProductList,
  SalesProductList,
  SwapProductsList,
} from "../../Components/Product";

export const HomePageProductGrid = () => {
  return (
    <Box>
      <SalesProductList />
      <br />
      <br />
      <SwapProductsList />
      <br />
      <br />
      <AuctionsProductList />
    </Box>
  );
};
