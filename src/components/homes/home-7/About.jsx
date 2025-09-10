import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="wow fadeInUp">
              <h3
                className="section-title mb-40 mb-sm-30"
                style={{ color: "#2f3a59" }}
              >
                {t("facilityHeading")}
              </h3>
            </div>
            <div className="row text-start text-gray mb-80 mb-sm-60">
              <div
                className="col-md-6 mb-sm-20 wow linesAnimInLong"
                data-splitting="lines"
              >
                {t("facilityText1")}
              </div>
              <div
                className="col-md-6 wow linesAnimInLong"
                data-splitting="lines"
              >
                {t("facilityText2")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
