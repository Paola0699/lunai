import Home1MainDemoMultiPage from "@/pages/homes/home-1/main-demo/main-multi-page/page";
import { Route } from "react-router-dom";
import React from "react";

export default function HomepageRoutes() {
  return (
    <>
      <React.Fragment>
        <Route path="main-multi-page" element={<Home1MainDemoMultiPage />} />
      </React.Fragment>
    </>
  );
}
