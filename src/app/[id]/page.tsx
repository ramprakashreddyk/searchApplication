"use client"
import React from 'react'
import { useParams } from "next/navigation";
import { useSelector } from 'react-redux';
const SingleDetails = () => {
    const { allProducts } = useSelector((state: any) => state.auth)
    const { id } = useParams()
    const SingleProduct = allProducts.filter((each: any) => (
        each.id == id
    ))
    console.log(SingleProduct);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border flex flex-col items-center text-center p-4 w-[600px] rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-2">{SingleProduct[0]?.name}</h1>
                <h3 className="text-lg text-gray-600 mb-2">{SingleProduct[0]?.company}</h3>
                <img
                    src={SingleProduct[0]?.image}
                    alt="image"
                    className="w-40 h-40 object-cover rounded-full mb-2"
                />
                <p className="text-xl font-semibold">{SingleProduct[0]?.price}</p>
                <p className="text-sm text-gray-700 mt-2">{SingleProduct[0]?.description}</p>
            </div>
        </div>

    )
}

export default SingleDetails;
