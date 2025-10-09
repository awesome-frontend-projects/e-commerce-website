"use client";

import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function CountdownTimer() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <FlipClockCountdown
        to={new Date().getTime() + 4 * 24 * 3600 * 1000 + 5000}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 16,
          fontWeight: 500,
          textTransform: "uppercase",
          color: "#fff",
        }}
        digitBlockStyle={{
          maxWidth: 60,
          maxHeight: 60,
          fontSize: 38,
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: 600,
        }}
        dividerStyle={{ color: "black", height: 1 }}
        separatorStyle={{ color: "white", size: "6px" }}
        duration={0.5}
      >
        Finished
      </FlipClockCountdown>
    </div>
  );
}
