"use client";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonialsCardItems } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="section pb-24">
      <div className="container">
        {/* Title */}
        <Title subtitle="TESTIMONIALS" title="What People Says" />

        {/* Card wrapper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          breakpoints={{
            575: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 2000,
          }}
          className="grid lg:grid-cols-2 gap-7 mt-11"
        >
          {testimonialsCardItems.map((item) => (
            // Card
            <SwiperSlide
              className="border bg-white rounded-lg p-8 mb-20"
              key={item.id}
            >
              {/* Author Info */}
              <div className="flex items-start gap-2.5">
                {/* Img */}
                <div>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="card-title">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>

              {/* Text */}
              <p className="mt-5 mb-7">{item.text}</p>

              {/* stars */}
              <div className="text-amber-500 flex items-center">
                <Star fill="#FF9727" />
                <Star fill="#FF9727" />
                <Star fill="#FF9727" />
                <Star fill="#FF9727" />
                <Star fill="#FF9727" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
