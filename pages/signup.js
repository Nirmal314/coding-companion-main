import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LL from "../public/CC_V.png";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codechef, setCodechef] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const router = useRouter();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !pass1 || !pass2 || !leetcode || !codechef || !codeforces) {
      toast.error("Plase enter all the details.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (!email.match(mailformat)) {
      toast.error("Invalid email address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (pass1 != pass2) {
      toast.error("Passwords does not match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const userinfo = {
        username: name,
        email: email,
        password: pass1,
        profile: {
          leetcode_id: leetcode,
          hackerrank_id: codeforces,
          codechef_id: codechef,
        },
      };
      const result = await fetch(`http://127.0.0.1:8000/userprofile/`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });
      const data = await result.json();
      console.log(data);

      setTimeout(() => {
        router.push("/signin");
      }, 1500);
      toast.success("User created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#141c28] p-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full max-w-4xl bg-[#141c28] border-2 border-[#43c0f5] shadow-xl shadow-all rounded-2xl overflow-hidden">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="items-center justify-center hidden w-1/2 p-8 md:flex">
            <Image src={LL} height={450} width={350} alt="Logo" className="h-auto max-w-full" />
          </div>
          <div className="w-full p-8 md:w-1/2">
            <h1 className="mb-8 text-3xl font-medium text-center text-white md:text-4xl md:text-left">
              Create an Account!
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                icon={<UserIcon />}
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                icon={<EmailIcon />}
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <InputField
                  icon={<LockIcon />}
                  type="password"
                  placeholder="Create password"
                  onChange={(e) => setPass1(e.target.value)}
                />
                <InputField
                  icon={<LockIcon />}
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) => setPass2(e.target.value)}
                />
              </div>
              <InputField
                icon={<CodeIcon />}
                type="text"
                placeholder="Leetcode ID"
                onChange={(e) => setLeetcode(e.target.value)}
              />
              <InputField
                icon={<CodeIcon />}
                type="text"
                placeholder="Codechef ID"
                onChange={(e) => setCodechef(e.target.value)}
              />
              <InputField
                icon={<CodeIcon />}
                type="text"
                placeholder="Codeforces ID"
                onChange={(e) => setCodeforces(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-[#43c0f5] text-lg transition-all text-[#141c28] font-bold py-3 px-6 rounded-xl hover:bg-[#3aa8d8]"
              >
                Sign up
              </button>
            </form>
            <p className="mt-6 text-center text-white text-md">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#43c0f5] underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ icon, type, placeholder, onChange }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-white pointer-events-none">
      {icon}
    </div>
    <input
      className="w-full bg-transparent text-white placeholder-[#909090] border-b border-white py-2 px-4 pl-10 focus:outline-none focus:border-[#43c0f5] transition-colors"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
  </svg>
);

export default Signup2;

export async function getServerSideProps({ req, res }) {
  const proto =
    req.headers["x-forwarded-proto"] || req.connection.encrypted
      ? "https://"
      : "http://";
  return {
    props: {
      host: req.headers.host,
      proto,
    },
  };
}
