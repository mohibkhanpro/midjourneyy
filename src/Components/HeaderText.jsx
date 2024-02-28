import React from "react";
import { FaDiscord } from "react-icons/fa";

const HeaderText = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          alignItems: "center",
        }}
      >
        <h1 className="text-5xl font-black tracking-wide		">
          Best of Prompt Hunt
        </h1>
        <h3 className="text-base	tracking-wide">
          Creations made by our community
        </h3>
        <a
          href="https://your-discord-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-gray-500 text-white text-opacity-50 py-2 px-4 rounded-md hover:bg-zinc-500/50 hover:text-white transition duration-300"
        >
          <FaDiscord className="mr-2 text-gray-500 hover:text-white" />
          <p style={{ fontSize: "13px", letterSpacing: "2px" }}>
            {" "}
            Join the Discord
          </p>
        </a>
      </div>
    </>
  );
};

export default HeaderText;
