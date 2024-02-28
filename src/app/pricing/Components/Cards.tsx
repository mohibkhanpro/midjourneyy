import React from "react";

const Cards = () => {
  return (
    <>
      <div className=" py-4 dark:bg-slate-900 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Toggle */}
            {/* <div className="mt-16 flex justify-center">
              <div className="rounded-full border border-slate-300 p-1 dark:border-slate-300/20">
                <div className="flex text-xs font-semibold leading-5">
                  <button className="w-auto rounded-full bg-blue-600 px-3 py-1 text-slate-200 focus:outline-none">
                    Monthly
                  </button>
                  <button className="rounded-full px-3 py-1 text-slate-800 focus:outline-none dark:text-slate-200">
                    Yearly
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-4">
            <div className="flex flex-col transition-transform ease-in transform hover:-translate-y-2 justify-between rounded-3xl bg-zinc-900 p-8 text-white ring-1 ring-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-300/20 lg:mt-8 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id="tier-starter"
                    className="text-lg font-semibold leading-8"
                  >
                    Starter
                  </h3>
                  <p className="rounded-full bg-zinc-500/10 px-2.5 py-1 text-xs  leading-5 text-white">
                    ✨ Free trial
                  </p>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight">
                    $9.99
                  </span>
                  <span className="text-sm  leading-6 text-white  dark:text-slate-400">
                    /year
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-white dark:text-slate-400"
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
                    7-day free trial
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
                    1,000 tokens per month
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
                    1 chatbot
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
                    20 stored chats
                  </li>
                </ul>
              </div>
              <a
                href=""
                aria-describedby="tier-starter"
                style={{ transition: ".2s" }}
                className="mt-8 block bg-zinc-500/10  rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white text-opacity-50 ring-1 ring-zinc-500/50   hover:bg-zinc-500/50 hover:text-blue-50 hover:text-white"
              >
                Buy plan
              </a>
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-zinc-900 p-8 text-white ring-2 ring-teal-500 dark:bg-slate-900 dark:text-slate-200 lg:z-10 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id="tier-startup"
                    className="text-lg font-semibold leading-8"
                  >
                    Pro
                  </h3>
                  <p className="rounded-full bg-zinc-500/10 px-2.5 py-1 text-xs  leading-5 text-white">
                    🚀 Most popular
                  </p>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight">
                    $19.99
                  </span>
                  <span className="text-sm  leading-6 text-white dark:text-slate-400">
                    /year
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-white dark:text-slate-400"
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
                    5000 tokens per month
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
                    5 chatbots
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
                    Integrations
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
                    Document support
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-describedby="tier-pro"
                style={{ transition: ".2s" }}
                className="mt-8 block rounded-md bg-zinc-500/50 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-500/40 hover:text-opacity-50"
              >
                Buy plan
              </a>
            </div>
            <div className="flex flex-col transition-transform ease-in transform hover:-translate-y-2 justify-between rounded-3xl bg-zinc-900 p-8 text-white ring-1 ring-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-300/20 lg:mt-8 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id="tier-enterprise"
                    className="text-lg font-semibold leading-8"
                  >
                    Enterprise
                  </h3>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight">
                    $29.99
                  </span>
                  <span className="text-sm  leading-6 text-white dark:text-slate-400">
                    /year
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-white dark:text-slate-400"
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
              </div>
              <a
                href="#"
                aria-describedby="tier-enterprise"
                style={{ transition: ".2s" }}
                className="mt-8 block bg-zinc-500/10  rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white text-opacity-50 ring-1 ring-zinc-500/50   hover:bg-zinc-500/50 hover:text-blue-50 hover:text-white"
              >
                Buy plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
