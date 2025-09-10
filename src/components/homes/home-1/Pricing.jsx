import { pricing2 } from "@/data/pricing";
import { t } from "i18next";
import React, { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const retreatOptions = t("retreatOptions", { returnObjects: true });

  return (
    <>
      {/* Tab panes */}
      <div className="tab-content tpl-minimal-tabs-cont position-relative">
        {/* Decorative Waves */}
        {/* End Decorative Waves */}
        <div className="tab-pane show active" id="tab-annual" role="tabpanel">
          <div className="row mt-n30">
            {/* Pricing Item */}
            {Array.isArray(retreatOptions) &&
              retreatOptions.slice(0, 4).map((elm, i) => (
                <div
                  key={i}
                  className="col-md-6 col-lg-3 mt-30 d-flex align-items-stretch"
                >
                  <div className="pricing-item">
                    <div className="pricing-item-inner round">
                      <div className="pricing-wrap">
                        <div className="pricing-icon mb-0">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={elm.width}
                            height={elm.height}
                            viewBox={`0 0 ${elm.width} ${elm.height}`}
                            aria-hidden="true"
                            style={{ color: "#2f3a59" }}
                          >
                            <path d={elm.svgPath} />
                          </svg>
                        </div>
                        <h4
                          className="pricing-title"
                          style={{ color: "#2f3a59" }}
                        >
                          {elm.title}
                        </h4>
                        <div
                          className="pricing-num"
                          style={{ color: "#2f3a59" }}
                        >
                          <sup>$</sup>
                          {isYearly
                            ? Math.round((elm.price * 12 * 75) / 100)
                            : elm.price}
                        </div>
                        <div className="pr-per">{elm.per}</div>
                        <div className="pricing-features">
                          <ul className="pr-list">
                            {elm.features?.map((elm, i) => (
                              <li key={i}>
                                <i className="mi-check" /> {elm}
                              </li>
                            ))}
                            {elm.disabledFeatures?.map((elm, i) => (
                              <li key={i} className="opacity-055">
                                <i className="mi-close" /> {elm}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/*    <div className="mt-auto local-scroll">
                        <a
                          href="#"
                          className="btn btn-mod btn-medium btn-white btn-round btn-hover-anim btn-full"
                          style={{
                            backgroundColor: "#2f3a59",
                            borderRadius: "2rem",
                          }}
                        >
                          <span>Buy {elm.title}</span>
                        </a>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* End Pricing Item */}

            {/* End Pricing Item */}
          </div>
        </div>
      </div>
      {/* End Tab panes */}
    </>
  );
}
