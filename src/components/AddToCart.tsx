'use client'
import { urlFor } from '@/app/lib/sanity';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    price_id: string;
}
const AddToCart = ({ name, description, price, currency, image, price_id }: ProductCart) => {
    const { addItem, handleCartClick } = useShoppingCart()

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
    return (
        <button onClick={() => { addItem(product), handleCartClick() }} className="w-[300px] h-[52px] bg-black text-white rounded-full">
            Add to cart
        </button>
    )
}

export default AddToCart