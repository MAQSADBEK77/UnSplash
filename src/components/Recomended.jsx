import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
function Recomended({ value, title = true }) {
  const { data, isPending, isError } = useFetch(value);
  return (
    <div className=" flex flex-col gap-7 mt-10">
      {!isPending && (
        <span className="loading w-40 loading-infinity text-primary fixed z-30 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></span>
      )}
      {!isPending && (
        <div className="fixed z-20 top-0 left-0 right-0 bottom-0 backdrop-blur-md"></div>
      )}
      {title && (
        <h1 className="text-primary text-2xl sm:text-4xl mt-7 mb-7">
          Home pictures for you
        </h1>
      )}
      <div className="flex justify-between flex-wrap gap-14">
        {data &&
          data.results.map((cart) => {
            return (
              <div
                key={cart.id}
                className="flex-col gap-4 w-56 h-44 sm:w-96 sm:h-64">
                <img
                  className="object-cover w-full h-full"
                  src={cart.urls.full}
                />
                <p className="text-xl text-secondary translate-y-[-30px] ml-3">
                  {cart.created_at}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Recomended;