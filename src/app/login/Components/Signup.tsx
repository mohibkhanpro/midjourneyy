import React from "react";
import { useState } from "react";
interface SignupProps {
  setShow: React.Dispatch<React.SetStateAction<number>>;
}

// const Signup = ({ setShow }) => {
const Signup: React.FC<SignupProps> = ({ setShow }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (inputName: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(inputValues);
    localStorage.setItem("Signup", JSON.stringify(inputValues));
  };
  return (
    <>
      <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center  font-bold">
        Create an account
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div>
          <label htmlFor="" style={{ fontSize: "14px" }}>
            Your name
          </label>
          <input
            onChange={(e) => handleInputChange("name", e.target.value)}
            style={{ padding: "10px", marginTop: "7px" }}
            type="text"
            placeholder="Doe"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10   bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <div>
          <label htmlFor="" style={{ fontSize: "14px" }}>
            Your email
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

        <button
          onClick={handleSubmit}
          className="relative z-10 hover:bg-zinc-500/50 bg-zinc-500/10  text-white text-opacity-50 hover:text-white rounded-3xl cursor-pointer"
          style={{ padding: "12px 0", transition: "0.2s" }}
        >
          Create account{" "}
        </button>
        <p
          onClick={() => setShow(0)}
          className="relative z-10 text-center cursor-pointer hover:underline hover:text-zinc-500/70 text-white"
          style={{ fontSize: "14px", transition: "0.2s" }}
        >
          Already have an account?{" "}
        </p>
      </div>
    </>
  );
};

export default Signup;
