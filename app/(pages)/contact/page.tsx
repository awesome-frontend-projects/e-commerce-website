import { Button } from "@/components/ui/button";
import { contactItems } from "@/data/data";
import React from "react";

export default function Contact() {
  return (
    <>
      <section className="mt-24">
        <div className="container flex flex-col items-center lg:flex-row lg:justify-center gap-10">
          {contactItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <span className="flex items-center justify-center">
                <item.icon size={32} />
              </span>

              <div className="text-center space-y-4">
                <h2 className="card-title">{item.title}</h2>
                <p className="max-w-[224px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact form */}
      <section className="section pb-28">
        <div className="container flex items-center justify-center">
          <div className="bg-gray-200 p-7 md:p-12  lg:py-14 lg:px-24 max-w-[737px] w-full">
            {/* Title */}
            <div className="text-center mb-8 space-y-3">
              <h2 className="font-semibold text-4xl">Get Any Questions?</h2>
              <p>Use the form below to get in touch with the sales team</p>
            </div>
            {/* Form */}
            <form action="" className="space-y-6">
              {/* Wrapper */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Input field */}
                <div className="w-full bg-white">
                  <input
                    type="text"
                    className="py-2.5 px-5 border border-black/20 w-full"
                    placeholder="First Name"
                  />
                </div>
                {/* Input field */}
                <div className="bg-white w-full">
                  <input
                    type="text"
                    className="py-2.5 px-5  border border-black/20 w-full"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* Input field */}
              <div className="w-full bg-white">
                <input
                  type="email"
                  className="py-2.5 px-5 border border-black/20 w-full"
                  placeholder="Email"
                />
              </div>

              <textarea
                placeholder="Type Message here..."
                className="py-2.5 px-5 border border-black/20 w-full  bg-white h-[137px]"
              />
              <Button size={"lg"} className="rounded-full">
                Submite
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
