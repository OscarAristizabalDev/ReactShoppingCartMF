import React, { useEffect, useState } from 'react'

import productsService from '../services/productsService'

interface ProductSearchProps {
    search: string
}

interface products {
    id: string,
    name: string,
    price: number,
    hasDiscount: boolean,
    discountPercentage: number,
    finalPrice: number,
    category: string,
    subCategory: string,
    image: string
}

export const ProductSearch = ({ search }: ProductSearchProps) => {

    const [products, setProductos] = useState<products[] | null>(null);

    useEffect(() => {

        if (search) {
            const fetchData = async () => {

                const response = await productsService.getProducts(search);
                const { data } = response;
                setProductos(data);
            }

            fetchData().catch(console.error);
        }


    }, [search])

    // const findProducts = () => {
    //     products?.map(product => product.category == search)
    // }

    return (
        /* <ul>
            // {products?.map(product => <li key={product.id}>{product.name}</li>)}
        // </ul> */
        <div className='bg-red-200'>
            <div className="mx-60 bg-red-200">
                {search}
            </div>
        </div>
    )
}
