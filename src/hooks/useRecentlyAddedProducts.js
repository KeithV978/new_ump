import useDidMount from "./useDidMount";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useRecentlyAddedProducts = (itemsCount) => {
  const [recentlyAddedProducts, setRecentlyAddeddProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  // const fetchRecentlyAddedProducts =

  useEffect(() => {
    if (recentlyAddedProducts.length === 0 && didMount) {
      (async () => {
        try {
          setLoading(true);
          setError("");

          const docs = await firebase.getRecentlyAddedProducts(itemsCount);

          if (docs.empty) {
            if (didMount) {
              setError("No featured products found.");
              setLoading(false);
            }
          } else {
            const items = [];

            docs.forEach((snap) => {
              const data = snap.data();
              items.push({ id: snap.ref.id, ...data });
            });

            if (didMount) {
              setRecentlyAddeddProducts(items);
              setLoading(false);
            }
          }
        } catch (error) {
          if (didMount) {
            setError("Failed to fetch featured products");
            setLoading(false);
          }
        }
      })();
    }
  }, [didMount, recentlyAddedProducts, itemsCount]);

  return {
    recentlyAddedProducts,    
    isLoading,
    error,
  };
};

export default useRecentlyAddedProducts;
