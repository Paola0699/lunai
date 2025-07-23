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
                <h6 style={{ textAlign: "center" }}>9 days</h6>

                <p
                  className="steps-2-text mb-0"
                  style={{ whiteSpace: "pre-line" }}
                >
                  We offer a single, comprehensive program designed to address
                  the full spectrum of your healing process—whether you're
                  navigating addiction, PTSD, depression, anxiety, traumatic
                  brain injury, or eating disorders. Each retreat is structured
                  around three carefully spaced flood doses of ibogaine,
                  administered under medical supervision and supported by a team
                  deeply experienced in both clinical safety and psychospiritual
                  care.
                </p>
                <p>
                  This protocol allows for a layered and sustained therapeutic
                  effect—uncovering root causes, interrupting entrenched
                  patterns, and opening the door to long-term transformation.
                  Rather than offering isolated treatments or quick
                  interventions, we provide a full arc of care: preparation,
                  intensive in-person work, and three months of integration
                  support to help stabilize and reinforce the changes you begin
                  during your time with us.
                </p>
                <p>
                  Our goal is not just to interrupt symptoms, but to create the
                  conditions for lasting personal and neurological reset.
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
