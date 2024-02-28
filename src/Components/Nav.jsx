import React from "react";
import coolImage from "../assets/Group33.png";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "56px",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          padding: "0.65rem 1rem",
          // backgroundColor: "rgba(24, 24, 27 ,1)",
        }}
        className="rounded-lg bg-zinc-500/10 "
      >
        <Link href={"/"}>
          <Image
            src={coolImage.src}
            alt="Description of the image"
            width="180"
            height="130"
          />
        </Link>

        <div className="relative " style={{ width: "40%" }}>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-8 pr-4 border w-full  bg-zinc-500/20 rounded-full focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IoSearchOutline className="text-gray-500" />
          </div>
        </div>

        <div className="flex justify-center items-center	 ">
          <ul
            style={{
              display: "flex",
              gap: "20px",
              color: "white",
              fontWeight: "300",
              paddingRight: "12px",
            }}
          >
            <Link href={"/"} className="hover:underline">
              <li>Home</li>
            </Link>{" "}
            <Link
              href={"/discountpricing"}
              target="_blank"
              className="hover:underline"
            >
              <li>Pricing</li>
            </Link>{" "}
          </ul>
          <div className="flex gap-1 items-center	 ">
            <div className="p-2 rounded-full hover:bg-zinc-500/20 transition duration-300 cursor-pointer">
              <FaXTwitter
                className="text-gray-500 hover:text-white"
                fontSize="17"
              />
            </div>
            <div className="p-2 rounded-full hover:bg-zinc-500/20 transition duration-300 cursor-pointer">
              <FaDiscord
                className="text-gray-500 hover:text-white"
                fontSize="20px"
              />
            </div>
          </div>
          <Link
            href={"/login"}
            className="py-2 px-4 hover:bg-zinc-500/20 transition duration-300 rounded-md	"
          >
            <li className="list-none	">Log in</li>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
