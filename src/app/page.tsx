"use client";
import { AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux/";
import { useEffect } from "react";
import { printingValue } from "@/redux/features/auth-slice";
import { getProducts } from "@/redux/features/auth-slice";
import Link from "next/link";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { value, allProducts } = useSelector((store: any) => store.auth);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  console.log(allProducts);

  const filterDetails = allProducts.filter((each: any) => {
    return ((value.length >= 3) ? each.name.includes(value) : each)
})

return (
  <div className="relative flex flex-col text-center">
    <div>
      <input
        type="search"
        value={value}
        placeholder="type something..."
        onChange={(e) => dispatch(printingValue(e.target.value))}
        className="mt-2 py-2 px-2 w-95  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
    <div className="grid grid-cols-3 pl-3 gap-3">
      {filterDetails.map((each: any, index: number) => {
        return (
          <Link href={`/${each.id}`}>
          <div className=" justify-center">
            <div className="border w-80 p-4 rounded-md shadow-md mb-4 mt-4 flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-2">{each.name}</h1>
              <h3 className="text-lg text-gray-600 mb-2">{each.company}</h3>
              <img
                src={each.image}
                alt="image"
                className="w-40 h-40 object-cover rounded-full mb-2"
              />
              <p className="text-xl font-semibold">{each.price}</p>
              <p className="text-sm text-gray-700 mt-2">{each.description}</p>
            </div>
          </div>
          </Link>
        )
      })}
    </div>
  </div>
);
};

export default Home;
