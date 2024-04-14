'use client'
import { urlFor } from '@/app/lib/sanity';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { ProductCart } from './AddToCart';


const CheckOutNow = ({ name, description, price, currency, image, price_id }: ProductCart) => {
    const { checkoutSingleItem } = useShoppingCart()
    function buyNow(price_id: string) {
        checkoutSingleItem(price_id)
    }
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }

    return (
        <button onClick={() => { buyNow(product.price_id) }} className="w-[300px] h-[52px] bg-black text-white rounded-full">
            CheckOut Now        </button>
    )
}

export default CheckOutNow