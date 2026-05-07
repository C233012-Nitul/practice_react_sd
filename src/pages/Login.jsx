import React from "react";
import reactLogo from "../assets/react.svg";
import { FaGithub, FaGoogle, FaApple } from "react-icons/fa";
export const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <FaGithub size={40} className="mt-40  " />
        <p className="text-xl font-semibold  ">Sign in to Github</p>
        <div className="w-full max-w-xs mt-8">
          <label className="text-sm w-full font-semibold  ">
            USERNAME OR EMAIL ADDRESS
          </label>
          <input
            type="email"
            className="block w-full border border-gray-400 rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-blue-50"
          />
        </div>
        <div className="w-full max-w-xs mt-3  ">
          <div className="flex flex-row justify-between  ">
            <label className="text-sm font-semibold  ">PASSWORD</label>
            <a href="#" className=" text-sm text-blue-500 hover:underline">
              forget password?
            </a>
          </div>
          <input
            type="password"
            className="block w-full border border-gray-400 rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-blue-50"
          />
          <button className="hover:bg-green-800 mt-4 w-full bg-green-700 rounded-lg py-2  ">
            SIGN IN
          </button>
        </div>
        <div className="max-w-xs w-full flex flex-row items-center mt-4  ">
          <div className="border-t border-gray-600 grow  "></div>
          <p>OR</p>

          <div className="border-t border-gray-600 grow  "></div>
        </div>
        <button className="hover:bg-gray-400 bg-black-200 mt-3 justify-center max-w-xs w-full   rounded-lg border border-gray-400 py-2 flex flex-row items-center">
          <FaGoogle className="mr-2" />
          CONTINUE WITH GOOGLE
        </button>
        <button className="bg-black-300 mt-2  hover:bg-gray-200 justify-center   max-w-xs w-full rounded-lg border border-gray-400 py-2 flex flex-row items-center">
          <FaApple className="mr-2  " />
          CONTINUE WITH APPLE
        </button>
        <p className=" mt-2 text-sm  ">
          NEW TO GITHUB?{" "}
          <a href="#" className="hover:underline text-blue-500">
            Create an Account
          </a>
          <a
            href="#"
            className="mt-2 flex hover:underline text-blue-700 flex-row justify-center"
          >
            SIGN IN WITH PASSKEY
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
