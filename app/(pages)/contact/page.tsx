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
          <div className="bg-gray-200  lg:py-14 lg:px-24">
            {/* Title */}
            <div className="text-center">
              <h2 className="font-semibold text-4xl">Get Any Questions?</h2>
              <p>Use the form below to get in touch with the sales team</p>
            </div>
            {/* Form */}
            <form action="">
              {/* Wrapper */}
              <div></div>

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
