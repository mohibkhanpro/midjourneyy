"use client";
import Nav from "../Components/Nav";
import SideMenu from "../Components/SideMenu";
import HeaderText from "../Components/HeaderText";
import Index from "../Components/Index";
import ImageSection from "../Components/ImageSection";
import { useState } from "react";
import { Data } from "../lib/data";
export default function Home() {
  const [item, setItem] = useState(Data);
  const [show, setShow] = useState(0);

  const SideMenuItems = [...new Set(Data.map((val) => val.title))];

  const filterItems = (title: string) => {
    const newItems = Data.filter((newval) => newval.title === title);
    setItem(newItems);
  };
  return (
    <main className="">
      <div className="pt-2 pr-2 pl-2 flex justify-center	">
        <Nav />
      </div>
      <div
        className="relative p-2 gap-2 flex items-stretch"
        style={{ height: "88vh" }}
      >
        <div className="w-[235px] flex-col hidden lg:flex overflow-y-auto">
          <SideMenu
            SideMenuItems={SideMenuItems}
            filterItems={filterItems}
            setItem={setItem}
            setShow={setShow}
          />
        </div>

        <div className="rounded-lg bg-zinc-900 flex-1 mx-auto overflow-y-auto">
          <div
            style={{
              backgroundColor: "rgba(24 ,24 ,27, 1)",
              marginBottom: "46px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.5rem 1.5rem 0 1.5rem",
            }}
          >
            <HeaderText />
          </div>
          <Index item={item} />

          {/* ImageSection */}
          {show === 0 ? (
            <div>
              <div className="pt-6 pr-6 pl-6 pb-0">
                <h2 className="text-2xl font-bold">Made for you</h2>
                <ImageSection />
              </div>
              <div className="pt-6 pr-6 pl-6 pb-0">
                <h2 className="text-2xl font-bold">Made for me</h2>
                <ImageSection />
              </div>
              <div className="pt-6 pr-6 pl-6 pb-0">
                <h2 className="text-2xl font-bold">Made for ...</h2>
                <ImageSection />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
}
