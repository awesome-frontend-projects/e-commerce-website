import { PlusCircle, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface cardProps {
  img: string;
  name: string;
  price: string;
}

export default function ProductCard({ img, name, price }: cardProps) {
  return (
    <div className="bg-white border rounded-lg p-8 space-y-7">
      {/* Img */}
      <div className="max-w-max mx-auto">
        <Image src={img} alt={name} width={205} height={135} />
      </div>
      {/* Content */}
      <div className="text-center">
        <h4 className="font-semibold">{name}</h4>
        {/* stars */}
        <div className="text-amber-500 flex items-center justify-center">
          <Star fill="#FF9727" />
          <Star fill="#FF9727" />
          <Star fill="#FF9727" />
          <Star fill="#FF9727" />
          <Star fill="#FF9727" />
        </div>
        <p className="text-red-500 font-semibold text-lg mt-3.5">{price}</p>
      </div>

      {/* Btn */}
      <Button className="w-full rounded-full" size={"lg"}>
        <span>
          <PlusCircle />
        </span>
        Add to Cart
      </Button>
    </div>
  );
}
