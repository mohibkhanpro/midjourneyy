import React from "react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const BackButton = () => {
  return (
    <>
      <Link href={"/discountpricing"}>
        <div
          className="hover:bg-zinc-500/10 focus:bg-zinc-500/50 text-white text-opacity-50 hover:text-white rounded-3xl cursor-pointer"
          style={{
            display: "flex",
            gap: "7px",
            alignItems: "center",
            width: "7%",
            justifyContent: "center",
            padding: "6px 4px",
            transition: ".2s",
          }}
        >
          <GoArrowLeft fontSize="23px" />
          <button>Back</button>
        </div>
      </Link>
    </>
  );
};

export default BackButton;
