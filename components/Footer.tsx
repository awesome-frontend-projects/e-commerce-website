import React from "react";
import { Button } from "./ui/button";
import { footerList } from "@/data/data";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-50">
      <div className="container divide-y divide-neutral-700">
        {/* Newsletter */}
        <div className="flex items-center justify-between py-14">
          <h2 className="section-title">Newsletter</h2>

          {/* Input field */}
          <div className="flex gap-4  max-w-md w-full">
            <div className="bg-white rounded-full w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-full py-2.5 outline-none indent-6 placeholder-neutral-700 text-neutral-800"
              />
            </div>
            <Button className="rounded-full" size={"lg"}>
              Submite
            </Button>
          </div>

          {/* Social Links */}
          <div>
            <a href="#" className="size-12 flex items-center"></a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-16 pb-9 space-y-11 md:space-y-18 lg:space-y-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr] gap-12">
            {/* footer brand */}
            <div>
              <h3 className="font-semibold text-4xl">Electrohub</h3>
              <p className="mt-3.5 mb-8">
                Lorem ipsum dolor sit amet consectetur. Et tortor eleifend amet
                turpis sed nulla. Nisl ipsum non enim diam in volutpat. Egestas
                blandit dictum mauris egestas. Eget libero curabitur.
              </p>

              {/* Contact info */}
              <div>
                <p>
                  Call us:{" "}
                  <a href="#" className="hover:underline">
                    {" "}
                    +1234567899
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="#" className="hover:underline">
                    ecommerce@email.com
                  </a>
                </p>
              </div>
            </div>

            {/* List */}
            {footerList.map((item) => (
              <div key={item.id}>
                <p className="text-xl font-semibold">{item.title}</p>
                <ul className="space-y-2 mt-2.5">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="hover:underline text-neutral-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-neutral-300">
            &copy; {new Date().getFullYear()} Keencoding.All Rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
