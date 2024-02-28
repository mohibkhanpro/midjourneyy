"use client";
import BackButton from "@/app/login/Components/BackButton";
import { BackgroundBeams } from "@/app/login/Components/BackgroundBeams";
import Cards from "./Cards";
import React from "react";

export function Background() {
  return (
    <div
      className="h-screen bg-neutral-950 relative flex flex-col   antialiased"
      //   style={{ height: "91vh" }}
    >
      {" "}
      <div className="p-2 relative z-10">
        <BackButton />
      </div>{" "}
      <div className=" p-4">
        <Cards />
      </div>
      <BackgroundBeams />
    </div>
  );
}
