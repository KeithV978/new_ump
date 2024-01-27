import * as React from "react";
import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";
import { getRelatedProducts } from "../../../../Redux/actions/product_actions";
import { useDispatch, 
  // useSelector 
} from "react-redux";

import productsData from "../../../../devData/productData";
import ProductGrid from "../../../../Components/Product/ProductGrid";
import { TitleBar } from "../../../../Components/Common";

const RelatedItems = () => {
  const dispatch = useDispatch();

  // const store = useSelector((state) => ({
  //   relatedProducts: state.products.relatedProducts || [],
  // }));

  React.useEffect(() => {
    dispatch(getRelatedProducts());
  }, [dispatch]);
 
  return (
    <React.Fragment>
      {/* <br /> */}
      <TitleBar>
        <Typography sx={{fontWeight: ''}}>Related Items</Typography>
        {/* <Typography sx={{fontWeight: ''}} component="a" href="https://unibenmarketplace.com/search">See More {">"}</Typography> */}
      </TitleBar>
      {/* <Divider/> */} 
      <Box>
      <ProductGrid products={productsData} gap={2}/>
      </Box>
    </React.Fragment>
  );
};
export default RelatedItems;
