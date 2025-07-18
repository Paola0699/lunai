import React from "react";

export default function About() {
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
                Facility
              </h3>
            </div>
            <div className="row text-start text-gray mb-80 mb-sm-60">
              <div
                className="col-md-6 mb-sm-20 wow linesAnimInLong"
                data-splitting="lines"
              >
                Our retreat is nestled in a peaceful and harmonious natural
                setting, thoughtfully designed to offer safety, comfort, and
                privacy. We provide welcoming spaces for both individual and
                group sessions, as well as green areas ideal for personal
                reflection.
              </div>
              <div
                className="col-md-6 wow linesAnimInLong"
                data-splitting="lines"
              >
                Each room is designed to invite rest and introspection, creating
                an environment that supports your journey toward healing and
                emotional growth. Every detail has been carefully considered to
                foster a sense of peace and inner balance. growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
