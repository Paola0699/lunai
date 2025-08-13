/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./styles/styles.css";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";

import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import Home1MainDemoOnepage from "./pages/homes/home-1/main-demo/main-one-page/page";
import MainPageNotFound from "./pages/otherPages/main-pages-404/page";
import SuccessPage from "./components/messages/SuccessPage";
import CancelPage from "./components/messages/CancelPage";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [pathname]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1MainDemoOnepage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />

        <Route path="*" element={<MainPageNotFound />} />
      </Routes>
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
