import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LL from "../public/CC_V.png";
import LLL from "../public/CC_W.png";

function Login1() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    console.log({ email, pass });
  }, [email, pass]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#141c28] p-4">
      <div className="w-full max-w-4xl bg-[#141c28] border-2 border-[#43c0f5] shadow-xl shadow-all rounded-2xl overflow-hidden">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex items-center justify-center w-full p-8 md:w-1/2">
            <Image src={LL} height={300} width={250} className="hidden h-auto max-w-full md:block" alt="Logo" />
            <Image src={LLL} height={300} width={250} className="block h-auto max-w-full md:hidden" alt="Logo" />
          </div>
          <div className="w-full p-8 md:w-1/2">
            <div className="mb-8">
              <h1 className="mb-2 text-4xl font-semibold text-center text-white md:text-5xl md:text-left">Sign in</h1>
              <p className="text-lg font-medium text-center text-white md:text-left">Welcome back!</p>
            </div>
            <form className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <input
                  className="w-full bg-transparent text-white border-b border-[#909090] py-3 px-4 pl-12 focus:outline-none focus:border-[#43c0f5] transition-colors"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  className="w-full bg-transparent text-white border-b border-[#909090] py-3 px-4 pl-12 focus:outline-none focus:border-[#43c0f5] transition-colors"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-[#43c0f5] text-lg text-[#141c28] font-bold py-3 px-6 rounded-xl transition-all hover:bg-[#3aa8d8]"
                type="submit"
              >
                Sign in
              </button>
            </form>
            <p className="mt-6 text-center text-white text-md">
              New here?{" "}
              <Link href="/signup" className="text-[#43c0f5] underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;