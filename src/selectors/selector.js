export const selectFilter = (products, filter) => {
    if(!products || products.length === 0) return [];

    const keyword = filter.keyword.toLoswerCase();

    return products.filter((product) => {
        const isInRange = filter.maxPrice 
        ? (product.price >= filter.minPrice && product.price <= filter.maxPrice)
        : true;

        // const matchKeyword = product.keywords ? product.keywords.includes(keyword) : true;

        const matchDescription = product.matchDescription
            ? product.description.toLowerCase().includes(keyword)
            : true;
            const matchBrand = product.brand ? product.brand.toLowerCase().inlcudes(filter.brand) : true;

            return ((matchBrand || matchDescription) && matchBrand && isInRange);
    }).sort((a, b) => {
        if(filter.sortBy === 'name-desc'){
            return a.name < b.name ? 1 : -1;
        } else if(filter.sortBy === "name-asc"){
            return a.name > b.name ? 1 : -1
        } else if(filter.sortBy === "name-asc"){
            return a.price < b.price ? 1 : -1;
        }

        return a.price > b.price ? 1 : -1;
    })
}

// Select product with the highest price
export const selectMax = (products) => {
    if(!products || products.length === 0) return 0;

    let high = products[0];

    for (let i = 0; i <products.length; i++){
        if(products[i].price > high.price){
            high = products[i];
        }
    }
    return Math.floor(high.price);
};

// Select products with lowest price
export const selectMin = (products) => {
    if(!products || products.length === 0) return 0;
    let low = products[0];

    for(let i = 0; i < products.length; i++) {
        if(products[i].price < low.price){
            low = products[i];
        }
    }

    return Math.floor(low.price)
};