import useDidMount from './useDidMount';
import { useEffect, useState } from 'react';
import firebase from '../services/firebase';

const useRecommendedProducts = (itemsCount) => {
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const didMount = useDidMount(true);

    

    useEffect(() =>{
        if(recommendedProducts.length === 0 && didMount){
            (async () => {
                try {
                    setLoading(true);
                    setError('');
        
                    const docs = await firebase.getRecommendedProducts(itemsCount);
        
                    if(docs.empty){
                        if(didMount){
                            setError('No recommended products found.');
                            setLoading(false);
                        }
                    }else {
                        const items = [];
        
                        docs.forEach((snap) => {
                            const data = snap.data();
                            items.push({id: snap.ref.id, ...data});
                        })
        
                        if(didMount) {
                            setRecommendedProducts(items);
                            setLoading(false);
                        }
                    }
                } catch (error) {
                    if (didMount){
                        setError('Failed to fetch recommended products');
                        setLoading(false);
                    }
                }
            })();
        }
    }, [didMount, itemsCount, recommendedProducts]);

    return {
        recommendedProducts,        
        isLoading, 
        error
    }
}

export default useRecommendedProducts;