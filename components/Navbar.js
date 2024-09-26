import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (!isOpen && document.getElementById("mobile-nav").classList.contains("block")) {
      setIsOpen(false)
    } else if (isOpen && document.getElementById("mobile-nav").classList.contains("hidden")) {
      setIsOpen(true)
    }
  }, [isOpen])


  function logout() {
    localStorage.removeItem("token");
    setToken({ value: null });
    router.push("/");
  }

  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="fixed items-center p-2 min-h-16 w-full z-[100] top-0 bg-[#0e1524] backdrop-filter backdrop-blur-xl bg-opacity-60 "
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

                <label class="hamburger block md:hidden">
                  <input className="text-white" id="hamburger-btn" type="checkbox" onClick={() => setIsOpen(!isOpen)} />
                  <svg viewBox="0 0 32 32">
                    <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path class="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Nav Items - Responsive Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        id="mobile-nav"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="block overflow-hidden md:hidden"
      >
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"} className="fixed z-[100] top-0 bg-[#0e1524] backdrop-filter backdrop-blur-xl bg-opacity-60 w-full mt-[4.0055rem] py-4">
            <div className="flex flex-col items-center justify-center space-y-6">
              <Link
                onClick={() => {
                  document.getElementById("hamburger-btn").click()
                }}
                href={"/"}
                className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  document.getElementById("hamburger-btn").click()
                }}
                href={"/explore"}
                className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]"
              >
                Explore
              </Link>
              <Link
                onClick={() => {
                  document.getElementById("hamburger-btn").click()
                }}
                href={"/problems"}
                className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]"
              >
                All Problems
              </Link>
              <Link
                onClick={() => {
                  document.getElementById("hamburger-btn").click()
                }}
                href={"/about"}
                className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]"
              >
                About Us
              </Link>
              {!tokeN.value && (
                <Link
                  onClick={() => {
                    document.getElementById("hamburger-btn").click()
                  }}
                  href={"/signin"}
                  className="text-white w-fit rounded-lg text-center hover:text-[#43c0f5] hover:bg-transparent px-4 py-2 border-b border-b-[#43c0f5]"
                >
                  Sign in
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default DaisyNav;
