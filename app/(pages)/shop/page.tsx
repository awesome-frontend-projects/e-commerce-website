import ProductCard from "@/components/ProductCard";
import { priceItems, products } from "@/data/data";
import React from "react";

export default function Shop() {
  return (
    <>
      <section className="my-20">
        <div className="container grid lg:grid-cols-12 gap-4">
          {/* boxs */}
          <div className="space-y-6 col-span-3">
            {priceItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 p-4 rounded-xl space-y-3.5"
              >
                <p className="card-title">{item.title}</p>
                <ul className="space-y-3.5">
                  {item.list.map((label, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-1.5">
                        {item.id === 2 && (
                          <span className="size-6 rounded-full bg-blue-800 inline-block group-nth-[2]:bg-yellow-500 group-nth-[3]:bg-gray-500 group-nth-[4]:bg-green-500 group-nth-[5]:bg-black group-nth-[6]:bg-white" />
                        )}
                        <p>{label.label}</p>
                      </div>
                      <span className="size-9 flex items-center bg-white justify-center rounded-lg">
                        {label.qty}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Product list */}
          <div className="col-span-9 space-y-2.5">
            <p>Showing 1 - 9 of 9 result</p>
            <div className="grid lg:grid-cols-3 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
