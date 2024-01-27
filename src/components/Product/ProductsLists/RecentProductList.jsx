import React from "react";
// import { useRecentlyAddedProducts } from "../../../hooks";
// import { useDispatch } from "react-redux";
// import { setAlert, setLoading } from "../../../Redux/actions/misc_actions";
import { ProductShowcaseGrid } from "..";
// import { getRecentProducts } from "../../../Redux/actions/product_actions";
// import Paper  from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FibreNewRounded from '@mui/icons-material/FiberNew'
import {recentProductsData} from "../../../devData/recentProductsData";

const RecentProductList = () => {
  // const { recentlyAddedProducts, isLoading, error } =
  //   useRecentlyAddedProducts(10);

  // const dispatch = useDispatch();

//   React.useEffect(() => {
//     error !== "" && dispatch(setAlert(error));

//     dispatch(getRecentProducts());
//     window.scrollTo(0, 0);
//     return () => dispatch(setLoading(false));
//   }, [dispatch, error]);

// console.log(recentlyAddedProducts)

  return (
    <Box overflow="hidden" borderRadius="5px">
      {recentProductsData && (
        <ProductShowcaseGrid
          title="Recently Added"
          // products={recentlyAddedProducts}
          products={recentProductsData}
          skeletonCount={4}
          gap={2}
          // isLoading={isLoading}
          multiRoll={false}
          logo={<FibreNewRounded fontSize="inherit"/>}
        />
      )}
    </Box>
  );
};
export default RecentProductList;
