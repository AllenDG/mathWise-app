import React from "react";
import { Link, Form } from "react-router-dom";
import spinner from "../../assets/spinner.svg";

function RegisterForm({ isSubmitting: loading }) {
  return (
    <>
       <Form
        className="flex flex-col max-w-[420px] mx-auto rounded-lg shadow-lg p-8 mt-8 bg-white"
        action="/register"
        method="post"
      >
        <h1 className="font-bold text-xl md:text-2xl text-neutral-900 mb-5">
          Let's improve your knowledge
        </h1>
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          required
          autoComplete="off"
          name="name"
          placeholder="Enter your name"
          className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:focus:ring-pink-600/80 mb-5"
        />{" "}
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          required
          autoComplete="off"
          name="email"
          placeholder="Enter your email"
          className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-pink-600/80 "
        />{" "}
        <br />
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          required
          className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:focus:ring-pink-600/80 mb-5"
          name="password"
          placeholder="Enter your password"
        />
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-2"
          htmlFor="confirmPw"
        >
          Confirm Password
        </label>
        <input
          type="password"
          required
          className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-pink-600/80 "
          name="confirmPw"
          placeholder="Enter your password"
        />
        <br />
        <button
          disabled={loading}
          className={`flex rounded-full ${!loading
            ? "bg-pink-600 hover:bg-neutral-50 hover:text-pink-600"
            : "focus:bg-pink-600/70 cursor-not-allowed" 
            }  p-1 justify-center font-semibold md:font-bold text-base md:text-lg text-center mt-5 mb-3 transition text-white`}
          type="submit"
        >
          {loading ? (
            <div className="flex items-center">
              <img
                src={spinner}
                alt="spinner"
                className="w-6 h-6 object-contain mr-2 animate-spin"
              />
              <p className="text-neutral-50/80 text-sm font-normal">
                Loading...
              </p>
            </div>
          ) : (
            <span>Sign Up</span>
          )}
        </button>
        <p className="text-gray-600 text-xs font-semibold mt-3">
          Already have account ?
          <Link className="ml-2 text-pink-600" to={"/login"}>
            Sign In
          </Link>{" "}
        </p>
      </Form>
    </>
  );
}

export default RegisterForm;
