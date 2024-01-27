import useDidMount from "./useDidMount";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useSalesProducts = (itemsCount) => {
  const [salesProducts, setSalesProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  useEffect(()=> {
    if (salesProducts.length === 0 && didMount) {
        (async () => {
            try {
                setLoading(true);
                setError("");
      
                const docs = await firebase.getSalesProducts(itemsCount);
      
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
                    setSalesProducts(items);
                    setLoading(false);
                  }
                }
              } catch (error) {
                if (didMount) {
                  setError("Failed to fetch featured products");
                  setLoading(false);
                }
              }
        })()
    }
  }, [didMount, salesProducts,itemsCount])

  return{
    salesProducts,
    isLoading,
    error
  }
}

export default useSalesProducts;