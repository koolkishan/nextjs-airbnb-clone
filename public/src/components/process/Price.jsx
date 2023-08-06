import { userAppStore } from "airbnb/store/store";
import React from "react";

export default function Price() {
  const { price, setPrice } = userAppStore();
  return (
    <div className="flex  items-center justify-center h-full text-airbnb-light-black">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">Now, set your price</h2>
          <p>You can change it anytime.</p>
        </div>
        <div className="flex flex-col gap-4 relative">
          <span className="absolute left-2 top-11 transform -translate-y-1/2 text-2xl text-black">
            $
          </span>
          <textarea
            className="border border-gray-400 h-20 w-[550px] rounded-lg active:border-gray-950 p-6 no-scrollbar text-3xl items-center flex justify-center pl-7"
            value={price}
            onChange={(e) => {
              if (e.target.value) {
                setPrice(parseInt(e.target.value));
              } else setPrice(0);
            }}
          />
        </div>
      </div>
    </div>
  );
}
