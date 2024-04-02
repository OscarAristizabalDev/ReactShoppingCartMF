import React from 'react';
import { useLocation } from 'react-router-dom';

import { ProductSearch } from 'mf_products/ProductSearch';

export const SearchProduct = () => {

    const { state } = useLocation(); // Returns the current location object, which represents the current URL in web browsers.
    const { key } = state;

    return (
        <>
            <ProductSearch search={key} />
        </>
    )
}

export default SearchProduct; // work with lazy loading the component must be to export by default