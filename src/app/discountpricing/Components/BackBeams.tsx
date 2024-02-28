"use client";
import { BackgroundBeams } from "@/app/login/Components/BackgroundBeams";
import Link from "next/link";
import React from "react";

export function BackBeams() {
  const handleTweetButtonClick = () => {
    // URL for the Twitter Web Intent API to compose a tweet
    const tweetIntentUrl =
      "https://twitter.com/intent/tweet?text=Your%20tweet%20text%20here";

    // Open the Twitter tweet dialog
    window.open(tweetIntentUrl, "_blank", "width=600,height=300");
  };
  return (
    <div className="h-[37.75rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center  antialiased">
      <div
        className=" p-4 flex flex-row justify-around	"
        style={{ width: "60vw" }}
      >
        <div
          style={{ width: "43%" }}
          className="relative z-10 flex flex-col rounded-3xl bg-zinc-900 p-8 text-white ring-1 ring-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-300/20 lg: xl:p-10"
        >
          {" "}
          <ul
            role="list"
            className=" space-y-3 text-sm leading-6 text-white dark:text-slate-400"
          >
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5 flex-none text-slate-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
              20,000 tokens per month
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5 flex-none text-slate-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
              Unlimited chatbots
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5 flex-none text-slate-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
              Unlimited stored chats
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5 flex-none text-slate-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
              Train with websites or documents
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5 flex-none text-slate-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
              API access
            </li>
          </ul>
          <Link
            href={"/pricing"}
            aria-describedby="tier-enterprise"
            style={{ transition: ".2s" }}
            className="mt-8 block bg-zinc-500/10  rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white text-opacity-50 ring-1 ring-zinc-500/50   hover:bg-zinc-500/50 hover:text-blue-50 hover:text-white"
          >
            Buy plan
          </Link>
        </div>
        <div
          style={{ width: "43%" }}
          className="relative z-10 flex flex-col justify-between rounded-3xl bg-zinc-900 p-8 text-white ring-1 ring-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-300/20 lg:p-10 xl:p-10"
        >
          {" "}
          <ul
            role="list"
            className=" space-y-3 text-sm leading-6 text-white dark:text-slate-400"
          >
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5 flex-none text-slate-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
              Get a $50 discount for tweeting about us. We'd rather invest in
              you than in marketing!
            </li>
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5 flex-none text-slate-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
              Tweet something nice to get about Best AI Prompts to get discount
            </li>
          </ul>
          <a
            onClick={handleTweetButtonClick}
            aria-describedby="tier-enterprise"
            style={{ transition: ".2s" }}
            className="mt-8 block cursor-pointer bg-zinc-500/10  rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white text-opacity-50 ring-1 ring-zinc-500/50   hover:bg-zinc-500/50 hover:text-blue-50 hover:text-white"
          >
            Tweet
          </a>
        </div>{" "}
      </div>
      <BackgroundBeams />
    </div>
  );
}
