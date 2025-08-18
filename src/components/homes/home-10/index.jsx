import Team from "./Team";
import Newsletter from "./Newsletter";
import Steps from "../home-4/Steps";
import { Link } from "react-router-dom";
import Slider1 from "@/components/elements/Slider1";
import Faqs from "../home-1/Faq";
import Gallery1 from "@/components/gallery/Gallery1";
import About from "../home-7/About";
import Slider4 from "@/components/elements/Slider4";
import Pricing from "../home-1/Pricing";
import AnimatedText from "@/components/common/AnimatedText";

export default function Home10({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2
                className="section-caption-border"
                style={{ color: "#2f3a59", borderColor: "#2f3a59" }}
              >
                Lunai Reset Center
              </h2>
              <h3
                className="section-title-strong mb-90 mb-sm-50"
                style={{ color: "#2f3a59" }}
              >
                About Us
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <img
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-2.png"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <img
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-1.png"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
              <div className="wow linesAnimIn" data-splitting="lines">
                <p className="lead mt-0 mb-40" style={{ color: "#2f3a59" }}>
                  At <b>Lunai Reset Center</b>, we provide medically supervised
                  ibogaine treatment for those ready to interrupt destructive
                  patterns and reset their lives from the inside out. Our
                  process integrates medical rigor, emotional preparation, and
                  structured post-treatment integration.
                </p>
              </div>
            </div>

            <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
              <div className="round overflow-hidden">
                <img
                  width={330}
                  height={894}
                  src="/assets/images/demo-strong/section-image-3.png"
                  alt="Image description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />

      <section className="page-section" style={{ backgroundColor: "#2f3a59" }}>
        <Slider4 />
      </section>

      <section className="page-section" id="facility">
        <About />
      </section>

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="team"
      >
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
              <div>
                <h2
                  className="section-caption-border"
                  style={{ color: "#2f3a59", borderColor: "#2f3a59" }}
                >
                  Our Team
                </h2>
                <h3
                  className="section-title-strong mb-40"
                  style={{ color: "#2f3a59" }}
                >
                  Meet the <span className="font-alt">team of</span> experts
                </h3>
                <p className="mb-40" style={{ color: "#2f3a59" }}>
                  Meet the dedicated team behind our mission—experts in trauma,
                  mental health, and integrative care—committed to guiding each
                  person toward deep, lasting healing.
                </p>
              </div>
            </div>
            {/* End Left Column */}
            {/* Right Column */}
            <div className="col-xl-6 offset-xl-1">
              <Team />
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
      <section className="pt-30">
        <div id="paddingLeftContainer" className="container"></div>
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              id="paddingLeft"
              className={`split-column-left`}
              style={{ backgroundColor: "#DCEBEB", paddingLeft: "2rem" }}
            >
              <div>
                <h3 className="section-title mb-30">
                  Transforming
                  <span className="font-alt">
                    Lives Where Traditional Treatments{" "}
                  </span>{" "}
                  Fall Short
                </h3>
                <p className="mb-50">
                  We specialize in cases that conventional methods have failed:
                  addiction, PTSD, treatment-resistant depression, TBI
                  (traumatic brain injury), anxiety, and eating disorders.
                  Everything we do is designed for depth, safety, and
                  sustainability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              className="split-image-right"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <img
                width={1100}
                height={930}
                src="/assets/images/demo-strong/split-image.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "#2f3a59" }}
        className="page-section bg-scroll light-content"
        id="program"
      >
        {" "}
        <Steps />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="pricing"
      >
        {" "}
        <div className="text-center">
          <div className="row">
            {/* Page Title */}
            <div className="col-md-8 offset-md-2">
              <h2
                className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                data-wow-duration="1.2s"
                style={{ color: "#2f3a59" }}
              >
                OUR PRICING
              </h2>
              <h1 className="hs-title-1 mb-0" style={{ color: "#2f3a59" }}>
                <span className="wow charsAnimIn" data-splitting="chars">
                  <AnimatedText text="Retreat Options" />
                </span>
              </h1>
            </div>
            {/* End Page Title */}
          </div>
        </div>
        <br />
        <Pricing />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2
                className="section-caption-border"
                style={{ color: "#2f3a59", borderColor: "#2f3a59" }}
              >
                {" "}
                Our Services
              </h2>
              <h3
                style={{ color: "#2f3a59" }}
                className="section-title-strong mb-90 mb-sm-50"
              >
                Pathways to Healing
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 ">
              <div className="mt-n10">
                {/* Features List Item */}
                <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                  <div className="features-list-icon features-list-color-1">
                    <i className="mi-check" aria-hidden="true" />
                  </div>
                  <div className="features-list-text">
                    Full clinical screening
                  </div>
                </div>
                {/* End Features List Item */}
                {/* Features List Item */}
                <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                  <div className="features-list-icon features-list-color-1">
                    <i className="mi-check" aria-hidden="true" />
                  </div>
                  <div className="features-list-text">
                    4 preparatory sessions (before arrival)
                  </div>
                </div>
                {/* End Features List Item */}
                {/* Features List Item */}
                <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                  <div className="features-list-icon features-list-color-1">
                    <i className="mi-check" aria-hidden="true" />
                  </div>
                  <div className="features-list-text">
                    Private accommodation and meals
                  </div>
                </div>
                {/* End Features List Item */}
                {/* Features List Item */}
                <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                  <div className="features-list-icon features-list-color-1">
                    <i className="mi-check" aria-hidden="true" />
                  </div>
                  <div className="features-list-text">
                    Ibogaine administration with 24/7 supervision
                  </div>
                </div>
                {/* End Features List Item */}
              </div>
            </div>
            <div className="col-md-6 ">
              {/* Features List Item */}
              <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                <div className="features-list-icon features-list-color-1">
                  <i className="mi-check" aria-hidden="true" />
                </div>
                <div className="features-list-text">
                  Personalized support from licensed professionals
                </div>
              </div>
              {/* End Features List Item */}
              {/* Features List Item */}
              <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                <div className="features-list-icon features-list-color-1">
                  <i className="mi-check" aria-hidden="true" />
                </div>
                <div className="features-list-text">
                  12 integration sessions (after treatment)
                </div>
              </div>
              {/* End Features List Item */}
              {/* Features List Item */}
              <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                <div className="features-list-icon features-list-color-1">
                  <i className="mi-check" aria-hidden="true" />
                </div>
                <div className="features-list-text">
                  Access to both preparation and integration workbooks
                </div>
              </div>
              {/* End Features List Item */}
              {/* Features List Item */}
              <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                <div className="features-list-icon features-list-color-1">
                  <i className="mi-check" aria-hidden="true" />
                </div>
                <div className="features-list-text">
                  Ongoing communication with our team
                </div>
              </div>
              {/* End Features List Item */}
            </div>
          </div>
        </div>
      </section>
      <section
        className="page-section bg-dark-1 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-20.png)",
        }}
      >
        <Newsletter />
      </section>

      <section className="page-section" id="qa">
        <div className="container position-relative">
          <div className="row position-relative">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h3
                className="section-title text-center mb-80 mb-sm-60"
                style={{ color: "#2f3a59" }}
              >
                Frequently Asked Questions
              </h3>

              {/* <!-- Accordion --> */}
              <Faqs />
              {/* <!-- End Accordion --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-30">
        <div id="paddingRightContainer" className="container" />
      </section>
    </>
  );
}
