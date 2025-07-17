import AnimatedText from "@/components/common/AnimatedText";
import { parallaxMouseMovement } from "@/utlis/parallax";

import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

export default function Hero1() {
  useEffect(() => {
    parallaxMouseMovement();
  }, []);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-6 d-flex align-items-center mb-sm-60">
              <div>
                <h1 className="hs-title-1 mb-30" style={{ color: "white" }}>
                  <AnimatedText
                    text={
                      "Lunai is not a retreat. It's a reset for the better."
                    }
                  />
                </h1>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  <a
                    href="#about"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    <span>More information</span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon" style={{ color: "white" }}>
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text" style={{ color: "white" }}>
                Scroll Down
              </div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
