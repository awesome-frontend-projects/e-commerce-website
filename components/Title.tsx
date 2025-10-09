import React from "react";

interface titleProps {
  subtitle: string;
  title: string;
}

export default function Title({ subtitle, title }: titleProps) {
  return (
    <div className="text-center uppercase space-y-1.5">
      <p className="bg-gray-100 max-w-max rounded-full px-2 mx-auto ">
        {subtitle}
      </p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
