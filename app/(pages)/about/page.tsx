import PageTitle from "@/components/PageTitle";
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
            <Title
              subtitle="ABOUT US"
              title="Innovative solutions to
boost your projects"
              classes="text-left lg:mx-0"
            />

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
          <div className="grid gap-11 lg:grid-cols-4 mt-10">
            {whyChooseUs.map((item) => (
              <div key={item.id}>
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
