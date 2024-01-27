import useDidMount from "./useDidMount";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../services/firebase";
import { editProduct } from "../Redux/actions/product_actions";

const useProduct = ({ id, category }) => {
  // first check if the product is in the redux store on the local machine.
  const storeProduct = useSelector((state) =>
    state.products.items.find((item) => item.id === id)
  );

  const [product, setProduct] = useState(storeProduct);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        // if the product is not in the redux store, then go to the database and search for it.
        if (!product || product.id !== id) {
          setLoading(true);
          let doc;
          if(category){
             doc = await firebase.getSingleProduct(id, category);
          } else {
             doc = await firebase.getSingleAuctionProduct(id);
          }
          

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            // if found, Hallelujah! set it to the product state created to hold it.
            if (didMount) {
              // setProduct(doc)
              setProduct(data);
              setLoading(false);
              // dispatch(editProduct(id, {numberOfViews: Number(product.numberOfViews) +1}))
            }
          } else {
            setError("Product not found");
          }
        }
        dispatch(editProduct(id, {numberOfViews: Number(product.numberOfViews) +1}))
      } catch (error) {
        if (didMount) {
          setLoading(false);
          setError(error?.message || "Something went wrong");
        }
      }
    })();
  }, [id, category, didMount, product, dispatch]);
  return { product, isLoading, error };
};

export default useProduct;
