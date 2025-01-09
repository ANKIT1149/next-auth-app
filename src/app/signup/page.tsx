"use client";

import React, { useState } from "react";
import Button from "../components/button/page";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const Signup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  return (
    <div className="flex justify-center items-center h-screen p-3 flex-col">
      <h1 className="text-white font-bold font-serif text-3xl">Signup</h1>
      <hr className="border-2 border-red-800 w-32 bg-red-700 rounded-xl" />
      <form
        action=""
        onSubmit={Signup}
        className="w-[400px] flex justify-center flex-col items-center h-[500px] border-2 border-y-sky-500 mt-10 bg-white rounded-3xl"
      >
        <div className="mt-3 p-4 flex flex-col">
          <label
            htmlFor="username"
            className="text-black font-bold font-serif text-xl"
          >
            Username
          </label>
          <input
            className="w-[300px] mt-3 border-2 border-slate-900 hover:border-red-600 transition-all p-2 rounded-xl font-serif font-semibold text-white hover:text-black bg-black hover:bg-transparent italic"
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mt-0 p-4 flex flex-col">
          <label
            htmlFor="email"
            className="text-black font-bold font-serif text-xl"
          >
            Email
          </label>
          <input
            className="w-[300px] mt-3 border-2 border-slate-900 hover:border-red-600 transition-all p-2 rounded-xl font-serif font-semibold text-white hover:text-black bg-black hover:bg-transparent italic"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="mt-0 p-4 flex flex-col">
          <label
            htmlFor="password"
            className="text-black font-bold font-serif text-xl"
          >
            Password
          </label>
          <input
            className="w-[300px] mt-3 border-2 border-slate-900 hover:border-red-600 transition-all p-2 rounded-xl font-serif font-semibold text-white hover:text-black bg-black hover:bg-transparent italic"
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your Password"
            required
          />
        </div>

        <Button title="Signup" bottomtitle="Already have an Account?" bottomLink="Login" redirectLink="/login"/>
      </form>
    </div>
  );
};

export default Signup;
