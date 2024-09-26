import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { Montserrat } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
// const ms = Montserrat({
//   weight: "400",
// });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.query]);

  const noNavbarRoutes = ["/signin", "/signup"];

  return (
    <>
      <LoadingBar
        color="#43c0f5"
        progress={progress}
        waitingTime={400}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <main>
        {!noNavbarRoutes.includes(router.pathname) && <Navbar />}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
