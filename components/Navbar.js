import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/CC_H.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

function DaisyNav() {
  const [tokeN, setToken] = useState({ value: null });
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken({ value: token });
    }
  }, [router.query]);

  function logout() {
    localStorage.removeItem("token");
    setToken({ value: null });
    router.push("/");
  }

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="navbar fixed z-[100] top-0 bg-[#0e1524] backdrop-filter backdrop-blur-xl bg-opacity-60 w-full"
      >
        <div className="flex items-center justify-between w-full px-4">
          {/* Logo */}
          <div className="navbar-start">
            <Link href="/">
              <Image height={0} width={125} src={logo} alt="LOGO" />
            </Link>
          </div>

          {/* Navbar Center for Desktop */}
          <div className="hidden navbar-center md:flex">
            <ul className="p-0 menu menu-horizontal">
              <li>
                <Link
                  href={"/"}
                  className="text-white hover:text-[#43c0f5] hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/explore"}
                  className="text-white hover:text-[#43c0f5] hover:bg-transparent"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href={"/problems"}
                  className="text-white hover:text-[#43c0f5] hover:bg-transparent"
                >
                  All Problems
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="text-white hover:text-[#43c0f5] hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Navbar End with Login / Hamburger Menu */}
          <div className="flex items-center navbar-end">
            {tokeN.value && (
              <div onClick={logout}>
                <Link
                  href={"/signin"}
                  className="transition-all duration-300 rounded-lg bg-[#43c0f5] py-2 px-4 text-[#141c28] hover:bg-[#378db1]"
                >
                  Logout
                </Link>
              </div>
            )}
            {!tokeN.value && (
              <>
                <Link
                  href={"/signin"}
                  className="hidden md:block transition-all duration-300 rounded-lg bg-[#43c0f5] py-2 px-4 text-[#141c28] hover:bg-[#378db1]"
                >
                  Sign in
                </Link>

                <button
                  className="block text-white md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <span className="text-2xl">&times;</span> // Close icon
                  ) : (
                    <span className="text-2xl">&#9776;</span> // Hamburger icon
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Nav Items - Responsive Menu */}
      {isOpen && (
        <div className="bg-[#141c28] p-4 md:hidden mt-[4.7rem]">
          <div className="flex flex-col items-center justify-center space-y-6">
            <Link href={"/"} className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]">
              Home
            </Link>
            <Link href={"/explore"} className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]">
              Explore
            </Link>
            <Link href={"/problems"} className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]">
              All Problems
            </Link>
            <Link href={"/about"} className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]">
              About Us
            </Link>
            {!tokeN.value && (
              <Link
                href={"/signin"}
                className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default DaisyNav;
