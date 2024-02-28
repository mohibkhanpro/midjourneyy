"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SigninProps {
  setShow: React.Dispatch<React.SetStateAction<number>>;
}

const Signin: React.FC<SigninProps> = ({ setShow }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (inputName: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

  const handleSubmit = () => {
    // router.push("/");

    alert("good");
    localStorage.setItem("Signin", JSON.stringify(inputValues));
  };

  // if (fieldName === 'email') {
  //   setEmail(value);
  //   // Perform email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   setIsValidEmail(emailRegex.test(value));
  // }
  return (
    <>
      <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center  font-bold">
        Sign in to your account
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div>
          <label htmlFor="" style={{ fontSize: "14px" }}>
            Your Email
          </label>
          <input
            onChange={(e) => handleInputChange("email", e.target.value)}
            style={{ padding: "10px", marginTop: "7px" }}
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10   bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <div>
          <label htmlFor="" style={{ fontSize: "14px" }}>
            Password
          </label>
          <input
            onChange={(e) => handleInputChange("password", e.target.value)}
            style={{ padding: "10px", marginTop: "7px" }}
            type="password"
            placeholder="..."
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10   bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              id="rad"
              style={{ padding: "10px" }}
              type="checkbox"
              placeholder="..."
              className="   relative z-10   "
            />
            <label
              htmlFor="rad"
              style={{ fontSize: "14px" }}
              className="relative z-10 "
            >
              Remember me{" "}
            </label>
          </div>
          <a
            href="#"
            className="relative z-10 hover:underline hover:text-zinc-500/70 text-white "
            style={{ fontSize: "14px", transition: "0.2s" }}
          >
            Forgot password?
          </a>
        </div>
        <button
          onClick={handleSubmit}
          className="relative z-10 hover:bg-zinc-500/50 bg-zinc-500/10  text-white text-opacity-50 hover:text-white rounded-3xl cursor-pointer"
          style={{ padding: "12px 0", transition: "0.2s" }}
        >
          log in to your account
        </button>
        <p
          onClick={() => setShow(1)}
          className="relative z-10 text-center cursor-pointer hover:underline hover:text-zinc-500/70 text-white"
          style={{ fontSize: "14px", transition: "0.2s" }}
        >
          Dont have an account?
        </p>
      </div>
      {/* </div> */}
    </>
  );
};

export default Signin;
