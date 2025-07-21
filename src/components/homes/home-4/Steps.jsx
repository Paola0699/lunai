import React from "react";

export default function Steps() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
          <h2 className="section-title mb-70 mb-sm-50 text-center">
            Our Program
          </h2>
          {/* Steps Grid */}
          <div className="mb-n20">
            <div
              className="steps-2-item d-block d-sm-flex mb-20 light-content-2"
              style={{ backgroundColor: "#F2EFE7" }}
            >
              <div
                className="steps-2-intro pb-xs-30"
                style={{ marginBottom: "1rem" }}
              >
                <h3
                  className="steps-2-title"
                  style={{ textAlign: "center", fontSize: "1.7rem" }}
                >
                  Ibogaine Reset
                </h3>
                <h6 style={{ textAlign: "center" }}>7-10 days</h6>
                <p
                  className="steps-2-text mb-0"
                  style={{ textAlign: "center" }}
                >
                  A single, comprehensive program tailored to your specific
                  needs — whether you're dealing with addiction, PTSD,
                  depression, anxiety, TBI, or eating disorders.
                </p>
              </div>
            </div>
            {/* End Steps Item */}
          </div>
          {/* End Steps Grid */}
        </div>
      </div>
    </div>
  );
}
