import React from "react";

import FooterSocials from "./FooterSocials";
import { Link } from "react-router-dom";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link to={"/"} className="mb-30">
              <img
                src="/assets/images/logo-black.png"
                width={105}
                height={34}
                className="light-mode-logo"
                alt="Your Company Logo"
              />

              <img
                src="/assets/images/logo-white.svg"
                width={105}
                height={34}
                className="dark-mode-logo"
                alt="Your Company Logo"
              />
            </Link>
            <p>
              Integer auctor aliquet martor, sed lorem malesuada eros blandit
              eget. Proin lacinia mortoc id odio vestibulum.
            </p>
            <div className="clearlinks">
              <strong>T.</strong>
              <a href="tel:+18376528800">+1 837 652 8800</a>
            </div>
            <div className="clearlinks">
              <a href="mailto:elitethemes24@gmail.com">lunaireset@gmail.com</a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Company</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Social Media</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal &amp; Press</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>© mejora marketing {new Date().getFullYear()}.</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Based in Mexico City, México.</b>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
