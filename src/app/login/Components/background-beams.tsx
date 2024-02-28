"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import BackButton from "./BackButton";
import Signin from "./Signin";
import Signup from "./Signup";
import Nav from "@/Components/Nav";
export function BackgroundBeamsDemo() {
  const [show, setShow] = useState(0);
  return (
    <div
      className="h-screen bg-neutral-950 relative flex flex-col   antialiased"
      //   style={{ height: "91vh" }}
    >
      <div className="pt-2 pr-2 pl-2 flex justify-center relative z-10">
        <Nav />
      </div>

      <div
        className="max-w-2xl mx-auto p-4  "
        // style={{
        //   boxShadow:
        //     "rgb(147 147 147 / 9%) 0px 2px 1px, rgb(133 133 133 / 9%) 0px 4px 2px, rgb(60 60 60 / 9%) 0px 8px 4px, rgb(26 26 26 / 9%) 0px 16px 8px, rgb(0 0 0 / 9%) 0px 32px 16px",
        //   display: "flex",
        //   flexDirection: "column",
        //   gap: "32px",
        //   width: "34vw",
        //   marginTop: "60px",
        // }}
      >
        <div
          className="p-4 relative z-10 "
          style={{
            boxShadow:
              "rgb(147 147 147 / 9%) 0px 2px 1px, rgb(133 133 133 / 9%) 0px 4px 2px, rgb(60 60 60 / 9%) 0px 8px 4px, rgb(26 26 26 / 9%) 0px 16px 8px, rgb(0 0 0 / 9%) 0px 32px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            width: "31vw",
            marginTop: "30px",
            backgroundColor: " rgba(24 ,24 ,27 ,1)",
            border: "1px solid rgba(203, 213, 225, 1)",
            borderRadius: "1rem",
          }}
        >
          {show == 0 ? (
            <Signin setShow={setShow} />
          ) : (
            <Signup setShow={setShow} />
          )}
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
