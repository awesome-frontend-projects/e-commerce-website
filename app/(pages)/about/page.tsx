import Testimonials from "@/components/Testimonials";
import Title from "@/components/Title";
import { whyChooseUs } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      {/* About us */}
      <section className="pt-24">
        <div className="container grid lg:grid-cols-2 lg:items-center gap-8">
          {/* content */}
          <div className="lg:order-1">
            {/* title */}
            <div>
              <p className="bg-gray-100 max-w-max rounded-full px-2">
                ABOUT US
              </p>
              <h2 className="section-title">
                Innovative solutions to boost your projects
              </h2>
            </div>

            <p className="mt-3.5">
              Lorem ipsum dolor sit amet consectetur. Et tortor eleifend amet
              turpis sed nulla. Nisl ipsum non enim diam in volutpat. Egestas
              blandit dictum mauris egestas. Eget libero curabitur.Lorem ipsum
              dolor sit amet consectetur. Et tortor eleifend amet turpis sed
              nulla. Nisl ipsum non enim diam in volutpat. Egestas blandit
              dictum mauris egestas. Eget libero curabitur.Lorem ipsum dolor sit
              amet consectetur. Et tortor eleifend amet turpis sed nulla. Nisl
              ipsum non enim diam in volutpat. Egestas blandit dictum mauris
              egestas. Eget libero curabitur.Lorem ipsum dolor sit amet
              consectetur. Et tortor eleifend amet turpis sed nulla. Nisl ipsum
              non enim diam in volutpat. Egestas blandit dictum mauris egestas.
              Eget libero curabitur.Lorem ipsum dolor sit amet consectetur.{" "}
            </p>
          </div>
          {/* Image */}
          <div className="max-w-max mx-auto rounded-xl overflow-hidden">
            <Image
              src={"/images/section-img-2.png"}
              alt="section image"
              width={512}
              height={427}
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          {/* Title */}
          <Title subtitle="WHY US" title="WHY YOU SHOULD CHOOSE US?" />

          {/* Card wrapper */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mt-10">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="lg:border-none  md:even:border-l md:nth-[1]:border-b md:nth-[4]:border-t p-9 lg:p-5"
              >
                {/* Icon */}
                <span className="size-[60px] flex items-center ring ring-black/20 rounded-full justify-center justify-self-center mb-3.5">
                  <item.icon size={24} />
                </span>

                {/* Content */}
                <div className="space-y-3 text-center">
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
