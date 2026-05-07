import React from "react";
import reactLogo from "../assets/react.svg";
import { FaGithub, FaGoogle, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
export const Signup = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <div className="bg-[url('bg-darkest-medium.webp')] bg-cover min-h-screen">
        <div className="mt-40 flex flex-col items-center justify-between">
          <div className=""
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="hover:text-blue-500 text-3xl font-semibold text-white ">CREATE ACCOUNT</p>
            <p className="hover:text-blue-500 font-semibold text-white mt-6 text-sm">
              Sign up to get started and explore github
            </p>
            <p className="hover:text-blue-500 font-semibold text-white mt-6 text-sm">SEE MORE -</p>
            <motion.img
              src="dos-amigos.webp"
              className="h-96"
              initial={{ opacity: 0, y: 1000 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <FaGithub size={40} className="mt-40  " />
        <motion.p
          className="text-xl font-semibold"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          Sign up to Github
        </motion.p>
        <button className="hover:bg-gray-400 bg-black-200 mt-3 justify-center max-w-xs w-full   rounded-lg border border-gray-400 py-2 flex flex-row items-center">
          <FaGoogle className="mr-2" />
          CONTINUE WITH GOOGLE
        </button>
        <button className="bg-black-300 mt-2  hover:bg-gray-200 justify-center   max-w-xs w-full rounded-lg border border-gray-400 py-2 flex flex-row items-center">
          <FaApple className="mr-2  " />
          CONTINUE WITH APPLE
        </button>
        <div className="mt-2 max-w-xs w-full flex felx-row items-center">
          <div className=" bg-gray-50 border-t grow"></div>
          <p>OR</p>
          <div className=" bg-gray-50 border-t grow"></div>
        </div>
        <p className="mt-3 text-2xl flex-row">SIGN UP</p>
        <div className="w-full max-w-xs mt-2">
          <label className="text-sm w-full font-semibold ">USERNAME</label>
          <input
            type="text"
            className="block rounded-lg w-full border-gray-400 border px-2 py-2  focus:ring-blue-50 focus:outline-none focus:ring-2 focus:bg-blue-50"
          />
          <label className="text-sm w-full font-semibold  ">
            USERNAME OR EMAIL ADDRESS
          </label>
          <input
            type="email"
            className="block w-full border border-gray-400 rounded-lg px-2 py-2  focus:ring-2 focus:ring-blue-50 focus:outline-none focus:bg-blue-50"
          />
        </div>
        <div className="w-full max-w-xs mt-3  ">
          <div className="flex flex-row justify-between  ">
            <label className="text-sm font-semibold  ">PASSWORD</label>
          </div>

          <input
            type="password"
            className="block w-full border border-gray-400 rounded-lg px-2 py-2   focus:ring-blue-50 focus:outline-none focus:ring-2 focus:bg-blue-50"
          />
          <div>
            <label className="text-sm font-semibold">REGION*</label>
            <input
              type="text"
              className="block w-full border border-gray-400 rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-50 focus:outline-none focus:bg-blue-50"
            />
          </div>
          <button className=" mt-4 w-full bg-blue-500 rounded-lg py-2  text-white hover:bg-blue-600">
            SIGN UP
          </button>
         
        </div>
        <a
          href="#"
          className="mt-2 flex hover:underline text-blue-700 flex-row justify-center"
        >
          SIGN IN WITH PASSKEY
        </a>
      </div>
    </div>
  );
};
export default Signup;
