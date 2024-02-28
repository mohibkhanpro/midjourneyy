import Link from "next/link";
import React from "react";

const EventSide = () => {
  return (
    <>
      <div className="after:content relative mb-5 flex h-[354px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
        <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
          2022 Event Photos
        </h1>
        <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Our incredible Next.js community got together in San Francisco for our
          first-ever in-person conference!
        </p>
        <Link
          href={"/discountpricing"}
          className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
          target="_blank"
          rel="noreferrer"
        >
          Pricing
        </Link>
      </div>
    </>
  );
};

export default EventSide;
